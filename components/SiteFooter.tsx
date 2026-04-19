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
        <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
          <path d="M13.5 22v-8.2h2.8l.5-3.2h-3.3V8.4c0-.9.3-1.6 1.7-1.6h1.8V4c-.3 0-1.4-.1-2.7-.1-2.6 0-4.4 1.6-4.4 4.5v2.2H7.7v3.2h2.7V22h3.1Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
          <path d="M12 7.1A4.9 4.9 0 1 0 12 17a4.9 4.9 0 0 0 0-9.9Zm0 8.1a3.2 3.2 0 1 1 0-6.5 3.2 3.2 0 0 1 0 6.5Zm6.2-8.3a1.1 1.1 0 1 1-2.3 0 1.1 1.1 0 0 1 2.3 0ZM12 2.4c2.6 0 2.9 0 4 .1 1 0 1.5.2 1.8.3.5.2.8.4 1.2.7.3.3.5.6.7 1.2.1.3.3.8.3 1.8.1 1.1.1 1.4.1 4s0 2.9-.1 4c0 1-.2 1.5-.3 1.8-.2.5-.4.8-.7 1.2-.3.3-.6.5-1.2.7-.3.1-.8.3-1.8.3-1.1.1-1.4.1-4 .1s-2.9 0-4-.1c-1 0-1.5-.2-1.8-.3-.5-.2-.8-.4-1.2-.7-.3-.3-.5-.6-.7-1.2-.1-.3-.3-.8-.3-1.8A66.5 66.5 0 0 1 2.4 12c0-2.6 0-2.9.1-4 0-1 .2-1.5.3-1.8.2-.5.4-.8.7-1.2.3-.3.6-.5 1.2-.7.3-.1.8-.3 1.8-.3 1.1-.1 1.4-.1 4-.1Zm0-1.7c-2.6 0-3 0-4.1.1-1.2 0-2 .3-2.7.6a5.4 5.4 0 0 0-2 1.3c-.6.6-1 1.2-1.3 2-.3.7-.5 1.5-.6 2.7A58 58 0 0 0 .7 12c0 2.6 0 3 .1 4.1 0 1.2.3 2 .6 2.7.3.8.7 1.5 1.3 2 .6.6 1.2 1 2 1.3.7.3 1.5.5 2.7.6 1.1.1 1.5.1 4.1.1s3 0 4.1-.1c1.2 0 2-.3 2.7-.6a5.4 5.4 0 0 0 2-1.3c.6-.6 1-1.2 1.3-2 .3-.7.5-1.5.6-2.7.1-1.1.1-1.5.1-4.1s0-3-.1-4.1c0-1.2-.3-2-.6-2.7a5.4 5.4 0 0 0-1.3-2c-.6-.6-1.2-1-2-1.3-.7-.3-1.5-.5-2.7-.6C15 1 14.6 1 12 1Z" />
        </svg>
      );
    case "website":
      return (
        <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.8 9.2h-3.1a15.3 15.3 0 0 0-1.3-5.1 8.3 8.3 0 0 1 4.4 5.1Zm-6.8-7c1.1 1.2 2 3.5 2.3 7h-4.6c.3-3.5 1.2-5.8 2.3-7Zm-4.4 1.9a15.3 15.3 0 0 0-1.3 5.1H3.2a8.3 8.3 0 0 1 4.4-5.1Zm-4.4 6.8h3.1c.1 1.8.5 3.6 1.3 5.1a8.3 8.3 0 0 1-4.4-5.1Zm6.5 0h4.6c-.3 3.5-1.2 5.8-2.3 7-1.1-1.2-2-3.5-2.3-7Zm0-1.7c.3-3.5 1.2-5.8 2.3-7 1.1 1.2 2 3.5 2.3 7H9.7Zm4.7 6.8c.8-1.5 1.2-3.3 1.3-5.1h3.1a8.3 8.3 0 0 1-4.4 5.1Z" />
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
