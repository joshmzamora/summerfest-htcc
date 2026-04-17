"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { SiteContent } from "@/data/site-content";

type NavBarProps = {
  churchName: string;
  eventName: string;
  navigation: SiteContent["navigation"];
};

export function NavBar({ churchName, eventName, navigation }: NavBarProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <div className="nav-topline">
          <Link
            className="brand-mark"
            href="/"
            aria-label={`${eventName} home`}
            onClick={() => setMenuOpen(false)}
          >
            <span>{churchName}</span>
            <strong>{eventName}</strong>
          </Link>
          <button
            aria-controls="primary-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="nav-toggle"
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <nav
          aria-label="Primary navigation"
          className={`site-nav ${menuOpen ? "is-open" : ""}`}
          id="primary-navigation"
        >
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                aria-current={isActive ? "page" : undefined}
                className={isActive ? "is-active" : undefined}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
