"use client";

import { MotionPanel, MotionPressableLink, MotionStagger, eases, m, useReducedMotion } from "@/components/FestivalMotion";
import { SiteContent } from "@/data/site-content";

type SiteFooterProps = {
  churchName: string;
  eventName: string;
  footerLinks: SiteContent["footerLinks"];
  socialLinks: SiteContent["socialLinks"];
};

function SocialIcon({ platform }: { platform: SiteContent["socialLinks"][number]["platform"] }) {
  switch (platform) {
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" role="img" aria-hidden="true" fill="currentColor">
          <path d="M13.5 22v-8.2h2.8l.5-3.2h-3.3V8.4c0-.9.3-1.6 1.7-1.6h1.8V4c-.3 0-1.4-.1-2.7-.1-2.6 0-4.4 1.6-4.4 4.5v2.2H7.7v3.2h2.7V22h3.1Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" role="img" aria-hidden="true" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308 1.026 1.026 1.258 2.222 1.32 3.607.05 1.137.065 1.572.065 4.852s-.015 3.715-.065 4.852c-.062 1.385-.333 2.633-1.32 3.608-1.026 1.026-2.222 1.258-3.608 1.32-1.137.05-1.572.065-4.852.065s-3.715-.015-4.852-.065c-1.385-.062-2.633-.333-3.608-1.32-1.026-1.026-1.258-2.222-1.32-3.608-.05-1.137-.065-1.572-.065-4.852s.015-3.715.065-4.852c.062-1.385.333-2.633 1.32-3.608 1.026-1.026 2.222-1.258 3.608-1.32 1.137-.05 1.572-.065 4.852-.065Zm0-2.163c-3.263 0-3.67.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.277-.073 1.684-.073 4.947 0 3.263.014 3.67.072 4.947.2 4.358 2.618 6.78 6.98 6.98 1.277.059 1.684.073 4.947.073 3.263 0 3.67-.014 4.947-.072 4.358-.2 6.78-2.618 6.98-6.98.059-1.277.073-1.684.073-4.947 0-3.263-.014-3.67-.072-4.947-.2-4.358-2.618-6.78-6.98-6.98-1.277-.059-1.684-.073-4.947-.073Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324Zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 1-1.44 1.44 1.44 1.44 0 0 1 1.44-1.44Z" />
        </svg>
      );
    case "website":
      return (
        <svg viewBox="0 0 24 24" role="img" aria-hidden="true" fill="currentColor">
          <path d="M11 2h2v7h7v2h-7v11h-2v-11h-7v-2h7v-7Z" />
        </svg>
      );
    default:
      return null;
  }
}

export function SiteFooter({
  churchName,
  eventName,
  footerLinks,
  socialLinks,
}: SiteFooterProps) {
  const footerNote = "A parish celebration supporting our building fund";
  const reduceMotion = useReducedMotion();

  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <div className="footer-topper" aria-hidden="true">
          <span className="footer-divider-line" />
        </div>
        <div className="footer-panel">
          <div className="footer-layout">
            <MotionPanel as="div" className="footer-brand-block" hover="panel" reveal="signboard">
              <m.p
                animate={reduceMotion ? undefined : { y: [0, -1.5, 0] }}
                className="footer-brand"
                transition={{ duration: 6.2, ease: eases.settle, repeat: Infinity }}
              >
                {churchName}
              </m.p>
              <m.p className="footer-event" initial={reduceMotion ? false : { opacity: 0, y: 10 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true }}>
                {eventName}
              </m.p>
              <p className="footer-note">{footerNote}</p>
            </MotionPanel>
            <div className="footer-actions-block">
              <MotionPanel as="nav" className="footer-nav" aria-label="Footer navigation" hover="panel" reveal="ribbon">
                <p className="footer-column-title">Explore</p>
                <MotionStagger className="footer-link-list" stagger={0.07}>
                  {footerLinks.map((link) => (
                    <MotionPressableLink className="footer-link" href={link.href} key={link.href}>
                      <m.span className="footer-link-label" whileHover={reduceMotion ? undefined : { x: 3 }}>
                        {link.label}
                      </m.span>
                    </MotionPressableLink>
                  ))}
                </MotionStagger>
              </MotionPanel>
              <MotionPanel as="div" className="footer-social" hover="panel" reveal="sticker">
                <p className="footer-social-title">Stay connected</p>
                <MotionStagger className="footer-social-list" stagger={0.08}>
                  {socialLinks.map((item) => (
                    <MotionPressableLink
                      key={item.href}
                      className={`footer-social-link platform-${item.platform}`}
                      external={item.external}
                      hover="social"
                      href={item.href}
                      aria-label={`${item.label} (opens in a new tab)`}
                    >
                      <span className="footer-social-icon" aria-hidden="true">
                        <SocialIcon platform={item.platform} />
                      </span>
                      <span>{item.label}</span>
                    </MotionPressableLink>
                  ))}
                </MotionStagger>
              </MotionPanel>
            </div>
          </div>
          <div className="footer-meta">
            <p>Hosted by {churchName}</p>
            <p>&copy; 2026 {churchName}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
