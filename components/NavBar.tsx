"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

import { AnimatePresence, MotionPressableLink, eases, m, useReducedMotion } from "@/components/FestivalMotion";
import { SiteContent } from "@/data/site-content";

type NavBarProps = {
  churchName: string;
  eventName: string;
  navigation: SiteContent["navigation"];
};

export function NavBar({ churchName, eventName, navigation }: NavBarProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const navContent = (
    <>
      {navigation.map((item, index) => {
        const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

        return (
          <m.div
            key={item.href}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            className="site-nav-item"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            transition={{ delay: reduceMotion ? 0 : index * 0.04, duration: 0.24, ease: eases.settle }}
          >
            <MotionPressableLink
              className={`site-nav-link ${isActive ? "is-active" : ""}`.trim()}
              fillWidth
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {isActive ? (
                <m.span
                  className="site-nav-pill"
                  layoutId="site-nav-pill"
                  transition={{ type: "spring", stiffness: 320, damping: 28, mass: 0.8 }}
                />
              ) : null}
              <m.span
                className="site-nav-label"
                whileHover={reduceMotion ? undefined : { y: -1 }}
                whileTap={reduceMotion ? undefined : { y: 1 }}
              >
                {item.label}
              </m.span>
            </MotionPressableLink>
          </m.div>
        );
      })}
    </>
  );

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <div className="nav-topline">
          <MotionPressableLink
            ariaLabel={`${eventName} home`}
            className="brand-mark"
            onClick={() => setMenuOpen(false)}
            href="/"
          >
            <m.span
              animate={reduceMotion ? undefined : { y: [0, -1.5, 0] }}
              transition={{ duration: 5.8, ease: eases.settle, repeat: Infinity }}
            >
              {churchName}
            </m.span>
            <m.strong
              animate={reduceMotion ? undefined : { rotate: [-0.8, 0.5, -0.8] }}
              transition={{ duration: 7.4, ease: eases.settle, repeat: Infinity }}
            >
              {eventName}
            </m.strong>
          </MotionPressableLink>
          <m.button
            aria-controls="primary-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="nav-toggle"
            whileHover={reduceMotion ? undefined : { y: -2 }}
            whileTap={reduceMotion ? undefined : { y: 1, scale: 0.97 }}
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span className="nav-toggle-label">Menu</span>
            <span className={`nav-toggle-lines ${menuOpen ? "is-open" : ""}`.trim()} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </m.button>
        </div>
        <AnimatePresence initial={false}>
          {menuOpen ? (
            <m.nav
              key="mobile-nav"
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
              className="site-nav is-open"
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10, scale: 0.98 }}
              id="primary-navigation"
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -14, scale: 0.98 }}
              transition={{ duration: 0.26, ease: eases.settle }}
            >
              {navContent}
            </m.nav>
          ) : null}
        </AnimatePresence>
        <nav aria-label="Primary navigation" className="site-nav site-nav-desktop" id="primary-navigation-desktop">
          {navContent}
        </nav>
      </div>
    </header>
  );
}
