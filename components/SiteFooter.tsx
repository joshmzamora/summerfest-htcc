import Link from "next/link";

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

  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <div className="footer-topper" aria-hidden="true">
          <span className="footer-divider-line" />
        </div>
        <div className="footer-panel">
          <div className="footer-layout">
            <div className="footer-brand-block">
              <p className="footer-brand">{churchName}</p>
              <p className="footer-event">{eventName}</p>
              <p className="footer-note">{footerNote}</p>
            </div>
            <div className="footer-actions-block">
              <nav className="footer-nav" aria-label="Footer navigation">
                <p className="footer-column-title">Explore</p>
                <div className="footer-link-list">
                  {footerLinks.map((link) => (
                    <Link key={link.href} href={link.href}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </nav>
              <div className="footer-social">
                <p className="footer-social-title">Stay connected</p>
                <div className="footer-social-list">
                  {socialLinks.map((item) => (
                    <a
                      key={item.href}
                      className={`footer-social-link platform-${item.platform}`}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noreferrer" : undefined}
                      aria-label={`${item.label} (opens in a new tab)`}
                    >
                      <span className="footer-social-icon" aria-hidden="true">
                        <SocialIcon platform={item.platform} />
                      </span>
                      <span>{item.label}</span>
                    </a>
                  ))}
                </div>
              </div>
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
