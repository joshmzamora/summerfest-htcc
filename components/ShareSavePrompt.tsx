"use client";

import { usePathname } from "next/navigation";
import { startTransition, useEffect, useEffectEvent, useRef, useState } from "react";
import type { CSSProperties, TouchEvent as ReactTouchEvent } from "react";

import { SiteContent } from "@/data/site-content";

type ShareSavePromptProps = {
  eventName: string;
  config: SiteContent["sharePrompt"];
};

type DeviceKind = "mobile" | "tablet" | "desktop";
type PlatformKind = "ios" | "android" | "mac" | "windows" | "linux" | "other";
type InstallMode = "none" | "prompt" | "ios";
type PromptReason = "shown" | "later" | "dismissed" | "success";

type PromptRecord = {
  nextEligibleAt: number;
  reason: PromptReason;
};

type PromptStatus = {
  message: string;
  tone: "success" | "info";
};

type NavigatorWithStandalone = Navigator & {
  standalone?: boolean;
  userAgentData?: {
    platform?: string;
  };
};

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

const LOCAL_STORAGE_KEY = "summerfest.share-save-prompt";
const SESSION_SEEN_KEY = "summerfest.share-save-prompt.session";

function detectPlatform(navigatorObject: NavigatorWithStandalone): PlatformKind {
  const platform = (navigatorObject.userAgentData?.platform ?? navigatorObject.platform ?? "").toLowerCase();
  const userAgent = navigatorObject.userAgent.toLowerCase();
  const isIPad =
    /ipad/.test(userAgent) || (platform.includes("mac") && navigatorObject.maxTouchPoints > 1);

  if (/iphone|ipod/.test(userAgent) || isIPad) {
    return "ios";
  }

  if (/android/.test(userAgent)) {
    return "android";
  }

  if (platform.includes("mac")) {
    return "mac";
  }

  if (platform.includes("win")) {
    return "windows";
  }

  if (platform.includes("linux")) {
    return "linux";
  }

  return "other";
}

function detectDevice(windowObject: Window, platform: PlatformKind) {
  const coarsePointer = windowObject.matchMedia("(pointer: coarse)").matches;
  const width = windowObject.innerWidth;

  if (platform === "ios" || platform === "android") {
    return width >= 820 ? "tablet" : "mobile";
  }

  if (width >= 1080 && !coarsePointer) {
    return "desktop";
  }

  if (width >= 768) {
    return coarsePointer ? "tablet" : "desktop";
  }

  return "mobile";
}

function isSafariBrowser(navigatorObject: Navigator) {
  const userAgent = navigatorObject.userAgent;

  return /Safari/i.test(userAgent) && !/Chrome|CriOS|Edg|OPR|Firefox|FxiOS/i.test(userAgent);
}

function readPromptRecord() {
  try {
    const storedValue = window.localStorage.getItem(LOCAL_STORAGE_KEY);

    if (!storedValue) {
      return null;
    }

    return JSON.parse(storedValue) as PromptRecord;
  } catch {
    return null;
  }
}

function writePromptRecord(record: PromptRecord) {
  try {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(record));
  } catch {
    // Storage is optional enhancement.
  }
}

function clearPromptRecord() {
  try {
    window.localStorage.removeItem(LOCAL_STORAGE_KEY);
  } catch {
    // Storage is optional enhancement.
  }
}

async function copyText(value: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return true;
  }

  const textArea = document.createElement("textarea");
  textArea.value = value;
  textArea.setAttribute("readonly", "true");
  textArea.style.position = "absolute";
  textArea.style.left = "-9999px";
  document.body.appendChild(textArea);
  textArea.select();

  try {
    return document.execCommand("copy");
  } finally {
    document.body.removeChild(textArea);
  }
}

function getCurrentShareUrl(pathname: string) {
  if (typeof window === "undefined") {
    return pathname;
  }

  return window.location.href;
}

function getCooldownMs(config: SiteContent["sharePrompt"], reason: PromptReason) {
  const oneDayMs = 24 * 60 * 60 * 1000;

  if (reason === "success") {
    return config.timing.successCooldownDays * oneDayMs;
  }

  if (reason === "later") {
    return config.timing.maybeLaterCooldownDays * oneDayMs;
  }

  if (reason === "shown") {
    return config.timing.maybeLaterCooldownDays * oneDayMs;
  }

  return config.timing.dismissCooldownDays * oneDayMs;
}

function markPromptSeenThisSession() {
  try {
    window.sessionStorage.setItem(SESSION_SEEN_KEY, "true");
  } catch {
    // Session storage is optional enhancement.
  }
}

function markPromptWithCooldown(config: SiteContent["sharePrompt"], reason: Exclude<PromptReason, "shown">) {
  markPromptSeenThisSession();

  writePromptRecord({
    reason,
    nextEligibleAt: Date.now() + getCooldownMs(config, reason),
  });
}

export function ShareSavePrompt({ eventName, config }: ShareSavePromptProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [deviceKind, setDeviceKind] = useState<DeviceKind>("desktop");
  const [platform, setPlatform] = useState<PlatformKind>("other");
  const [nativeShareSupported, setNativeShareSupported] = useState(false);
  const [installMode, setInstallMode] = useState<InstallMode>("none");
  const [installPromptEvent, setInstallPromptEvent] = useState<BeforeInstallPromptEvent | null>(null);
  const [status, setStatus] = useState<PromptStatus | null>(null);
  const [sheetDetail, setSheetDetail] = useState<"install" | "bookmark" | null>(null);
  const [sheetDragY, setSheetDragY] = useState(0);
  const [isSheetDragging, setIsSheetDragging] = useState(false);
  const statusTimeoutRef = useRef<number | null>(null);
  const timedOpenTimeoutRef = useRef<number | null>(null);
  const bottomOpenTimeoutRef = useRef<number | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const isMobileLayout = deviceKind !== "desktop";
  const hasInstallOption = installMode !== "none";
  const title = isMobileLayout ? config.mobile.title : config.desktop.title;
  const description = isMobileLayout ? config.mobile.description : config.desktop.description;

  const installInstructions =
    installMode === "ios"
      ? "In Safari, tap Share, then choose Add to Home Screen."
      : "Use the install prompt to keep Summer Fest one tap away from your home screen.";

  function setFeedback(nextStatus: PromptStatus | null) {
    if (statusTimeoutRef.current) {
      window.clearTimeout(statusTimeoutRef.current);
      statusTimeoutRef.current = null;
    }

    setStatus(nextStatus);

    if (nextStatus) {
      statusTimeoutRef.current = window.setTimeout(() => {
        setStatus(null);
      }, 2600);
    }
  }

  function canShowPrompt() {
    try {
      if (window.sessionStorage.getItem(SESSION_SEEN_KEY) === "true") {
        return false;
      }
    } catch {
      // Session storage is optional enhancement.
    }

    const promptRecord = readPromptRecord();

    if (!promptRecord) {
      return true;
    }

    if (promptRecord.reason === "shown") {
      clearPromptRecord();
      return true;
    }

    return promptRecord.nextEligibleAt <= Date.now();
  }

  const openPromptIfEligible = useEffectEvent(() => {
    if (isOpen || !canShowPrompt()) {
      return;
    }

    markPromptSeenThisSession();
    startTransition(() => {
      setStatus(null);
      setSheetDetail(null);
      setSheetDragY(0);
      setIsSheetDragging(false);
      setIsOpen(true);
    });
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setInstallPromptEvent(event as BeforeInstallPromptEvent);
    };

    const handleAppInstalled = () => {
      setInstallPromptEvent(null);
      setInstallMode("none");
      setFeedback({
        message: config.feedback.installReady,
        tone: "success",
      });
      markPromptWithCooldown(config, "success");
      setIsOpen(false);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt as EventListener);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt as EventListener);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, [config]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const navigatorObject = navigator as NavigatorWithStandalone;
    const syncCapabilities = () => {
      const nextPlatform = detectPlatform(navigatorObject);
      const nextDeviceKind = detectDevice(window, nextPlatform);
      const standaloneMode =
        window.matchMedia("(display-mode: standalone)").matches || Boolean(navigatorObject.standalone);
      const supportsIOSHomeScreen = nextPlatform === "ios" && isSafariBrowser(navigatorObject) && !standaloneMode;

      setPlatform(nextPlatform);
      setDeviceKind(nextDeviceKind);
      setNativeShareSupported(typeof navigator.share === "function");

      if (standaloneMode) {
        setInstallMode("none");
        return;
      }

      if (installPromptEvent) {
        setInstallMode("prompt");
        return;
      }

      setInstallMode(supportsIOSHomeScreen ? "ios" : "none");
    };

    syncCapabilities();
    window.addEventListener("resize", syncCapabilities);

    return () => {
      window.removeEventListener("resize", syncCapabilities);
    };
  }, [installPromptEvent]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    timedOpenTimeoutRef.current = window.setTimeout(() => {
      openPromptIfEligible();
    }, config.timing.delayMs);

    return () => {
      if (timedOpenTimeoutRef.current) {
        window.clearTimeout(timedOpenTimeoutRef.current);
        timedOpenTimeoutRef.current = null;
      }
    };
  }, [config.timing.delayMs]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handleScroll = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
      const distanceFromBottom = document.documentElement.scrollHeight - (window.scrollY + window.innerHeight);
      const isNearBottom =
        scrollableHeight > 0 &&
        progress >= config.timing.scrollRatio &&
        distanceFromBottom <= config.timing.bottomOffsetPx;

      if (isNearBottom) {
        if (!bottomOpenTimeoutRef.current) {
          bottomOpenTimeoutRef.current = window.setTimeout(() => {
            bottomOpenTimeoutRef.current = null;
            openPromptIfEligible();
          }, config.timing.bottomDelayMs);
        }
        return;
      }

      if (bottomOpenTimeoutRef.current) {
        window.clearTimeout(bottomOpenTimeoutRef.current);
        bottomOpenTimeoutRef.current = null;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (bottomOpenTimeoutRef.current) {
        window.clearTimeout(bottomOpenTimeoutRef.current);
        bottomOpenTimeoutRef.current = null;
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [config.timing.bottomDelayMs, config.timing.bottomOffsetPx, config.timing.scrollRatio, pathname]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        setSheetDetail(null);
        markPromptWithCooldown(config, "dismissed");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [config, isOpen]);

  useEffect(() => {
    return () => {
      if (statusTimeoutRef.current) {
        window.clearTimeout(statusTimeoutRef.current);
      }

      if (timedOpenTimeoutRef.current) {
        window.clearTimeout(timedOpenTimeoutRef.current);
      }

      if (bottomOpenTimeoutRef.current) {
        window.clearTimeout(bottomOpenTimeoutRef.current);
      }
    };
  }, []);

  async function handleShare() {
    if (!nativeShareSupported) {
      return;
    }

    try {
      const shareUrl = getCurrentShareUrl(pathname);

      await navigator.share({
        title: eventName,
        text: `${eventName} at Holy Trinity Catholic Church`,
        url: shareUrl,
      });

      setFeedback({
        message: config.feedback.shareSuccess,
        tone: "success",
      });
      markPromptWithCooldown(config, "success");
      setIsOpen(false);
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        return;
      }

      setFeedback({
        message: "Sharing is not available right now. You can still copy the site link instead.",
        tone: "info",
      });
    }
  }

  async function handleCopy() {
    try {
      const shareUrl = getCurrentShareUrl(pathname);
      const didCopy = await copyText(shareUrl);

      if (!didCopy) {
        setFeedback({
          message: "Copying did not work in this browser. You can still use your browser menu to copy the address.",
          tone: "info",
        });
        return;
      }

      setFeedback({
        message: config.feedback.copySuccess,
        tone: "success",
      });
      markPromptWithCooldown(config, "success");
    } catch {
      setFeedback({
        message: "Copying is blocked in this browser right now. You can still bookmark the page or copy the address manually.",
        tone: "info",
      });
    }
  }

  async function handleInstall() {
    if (installMode === "ios") {
      setSheetDetail("install");
      setFeedback({
        message: config.feedback.installReady,
        tone: "info",
      });
      return;
    }

    if (!installPromptEvent) {
      return;
    }

    try {
      await installPromptEvent.prompt();
      const choice = await installPromptEvent.userChoice;

      if (choice.outcome === "accepted") {
        setFeedback({
          message: config.feedback.installReady,
          tone: "success",
        });
        markPromptWithCooldown(config, "success");
        setIsOpen(false);
      } else {
        setFeedback({
          message: "No problem. You can always add it later from this browser.",
          tone: "info",
        });
      }
    } catch {
      setFeedback({
        message: "The install option is not available right now. You can still copy the link or bookmark the page.",
        tone: "info",
      });
    }

    setInstallPromptEvent(null);
  }

  function dismissPrompt(reason: Exclude<PromptReason, "shown">) {
    setStatus(null);
    setIsOpen(false);
    setSheetDetail(null);
    setSheetDragY(0);
    setIsSheetDragging(false);
    touchStartRef.current = null;
    markPromptWithCooldown(config, reason);
  }

  function handleSheetTouchStart(event: ReactTouchEvent<HTMLDivElement>) {
    if (!isMobileLayout) {
      return;
    }

    const touch = event.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
    setIsSheetDragging(false);
  }

  function handleSheetTouchMove(event: ReactTouchEvent<HTMLDivElement>) {
    if (!isMobileLayout || !touchStartRef.current) {
      return;
    }

    const touch = event.touches[0];
    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;
    const mostlyVertical = Math.abs(deltaY) > Math.abs(deltaX) * 1.2;
    const isPullingDown = deltaY > 0;
    const panelIsAtTop = (panelRef.current?.scrollTop ?? 0) <= 0;

    if (!mostlyVertical || !isPullingDown || !panelIsAtTop) {
      if (sheetDragY !== 0) {
        setSheetDragY(0);
      }
      setIsSheetDragging(false);
      return;
    }

    setIsSheetDragging(true);
    setSheetDragY(Math.min(deltaY, 180));
  }

  function handleSheetTouchEnd() {
    if (!isMobileLayout) {
      return;
    }

    touchStartRef.current = null;

    if (sheetDragY >= 110) {
      dismissPrompt("dismissed");
      return;
    }

    setSheetDragY(0);
    setIsSheetDragging(false);
  }

  if (!isOpen) {
    return null;
  }

  const mobilePrimaryAction = nativeShareSupported ? "share" : hasInstallOption ? "install" : "copy";
  const sheetStyle: CSSProperties | undefined =
    isMobileLayout && sheetDragY > 0 ? { transform: `translateY(${sheetDragY}px)` } : undefined;

  return (
    <div
      aria-label="Share or save Summer Fest"
      className="share-save-prompt"
      role="presentation"
      onClick={() => dismissPrompt("dismissed")}
    >
      <div
        aria-describedby="share-save-description"
        aria-labelledby="share-save-title"
        aria-modal="true"
        className={`share-save-prompt-panel ${isMobileLayout ? "is-sheet" : "is-modal"} ${
          isSheetDragging ? "is-dragging" : ""
        }`}
        ref={panelRef}
        role="dialog"
        style={sheetStyle}
        onClick={(event) => event.stopPropagation()}
        onTouchCancel={handleSheetTouchEnd}
        onTouchEnd={handleSheetTouchEnd}
        onTouchMove={handleSheetTouchMove}
        onTouchStart={handleSheetTouchStart}
      >
        <div className="share-save-topline">
          <button
            aria-label="Close share and save prompt"
            className="share-save-close"
            type="button"
            onClick={() => dismissPrompt("dismissed")}
          >
            <span aria-hidden="true">x</span>
          </button>
        </div>

        <div className="share-save-accent" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="share-save-body">
          <div className="share-save-copy">
            <h2 id="share-save-title">{title}</h2>
            <p id="share-save-description">{description}</p>
          </div>

          <div className="share-save-actions">
            {isMobileLayout ? (
              <>
                {mobilePrimaryAction === "share" ? (
                  <button className="share-save-button share-save-button-primary" type="button" onClick={handleShare}>
                    {config.mobile.shareLabel}
                  </button>
                ) : null}

                {mobilePrimaryAction === "install" ? (
                  <button className="share-save-button share-save-button-primary" type="button" onClick={handleInstall}>
                    {config.mobile.installLabel}
                  </button>
                ) : null}

                {mobilePrimaryAction === "copy" ? (
                  <button className="share-save-button share-save-button-primary" type="button" onClick={handleCopy}>
                    {config.mobile.copyLabel}
                  </button>
                ) : null}

                {mobilePrimaryAction !== "install" && hasInstallOption ? (
                  <button
                    className="share-save-button share-save-button-secondary"
                    type="button"
                    onClick={handleInstall}
                  >
                    {config.mobile.installLabel}
                  </button>
                ) : null}

                {mobilePrimaryAction !== "copy" ? (
                  <button className="share-save-button share-save-button-secondary" type="button" onClick={handleCopy}>
                    {config.mobile.copyLabel}
                  </button>
                ) : null}
              </>
            ) : (
              <>
                <button className="share-save-button share-save-button-primary" type="button" onClick={handleCopy}>
                  {config.desktop.copyLabel}
                </button>
                <button
                  className="share-save-button share-save-button-secondary"
                  type="button"
                  onClick={() => setSheetDetail((current) => (current === "bookmark" ? null : "bookmark"))}
                >
                  {config.desktop.bookmarkLabel}
                </button>
                {nativeShareSupported ? (
                  <button className="share-save-button share-save-button-browser" type="button" onClick={handleShare}>
                    {config.desktop.shareLabel}
                  </button>
                ) : null}
              </>
            )}

            <button className="share-save-later" type="button" onClick={() => dismissPrompt("later")}>
              {isMobileLayout ? config.mobile.laterLabel : config.desktop.laterLabel}
            </button>
          </div>

          <div className="share-save-notes">
            {isMobileLayout && hasInstallOption && sheetDetail === "install" ? (
              <div className="share-save-note-card">
                <p className="share-save-note-label">Save for festival day</p>
                <strong>{config.mobile.installLabel}</strong>
                <p>{installInstructions}</p>
              </div>
            ) : null}

            {!isMobileLayout && sheetDetail === "bookmark" ? (
              <div className="share-save-note-card share-save-note-card-soft">
                <p className="share-save-note-label">Quick tip</p>
                <strong>{platform === "mac" ? "Safari, Chrome, and Firefox all use Cmd + D." : "Most browsers use Ctrl + D."}</strong>
                <p>You can rename the bookmark to something short like &quot;Summer Fest&quot; so it is easy to spot later.</p>
              </div>
            ) : null}

            {status ? (
              <div
                aria-live="polite"
                className={`share-save-status share-save-status-${status.tone}`}
                role="status"
              >
                {status.message}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
