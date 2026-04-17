import Link from "next/link";

import { SiteContent } from "@/data/site-content";

type SiteFooterProps = {
  churchName: string;
  eventName: string;
  footerLinks: SiteContent["footerLinks"];
  socialPlaceholders: SiteContent["socialPlaceholders"];
};

export function SiteFooter({
  churchName,
  eventName,
  footerLinks,
  socialPlaceholders,
}: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="container footer-layout">
        <div>
          <p className="footer-brand">{churchName}</p>
          <p>{eventName}</p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="footer-social">
          {socialPlaceholders.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}
