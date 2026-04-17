import Link from "next/link";

import { CardGrid } from "@/components/Cards";
import { HeroSection } from "@/components/HeroSection";
import { NavBar } from "@/components/NavBar";
import { Section } from "@/components/Section";
import { SiteFooter } from "@/components/SiteFooter";
import { siteContent } from "@/data/site-content";

export default function Home() {
  return (
    <main>
      <NavBar
        churchName={siteContent.churchName}
        eventName={siteContent.eventName}
        navigation={siteContent.navigation}
      />

      <HeroSection
        title={siteContent.eventName}
        date={siteContent.eventDate}
        time={siteContent.eventTime}
        tagline={siteContent.tagline}
        note={siteContent.heroNote}
        actions={siteContent.heroActions}
        countdownTarget={siteContent.countdownTarget}
      />

      <Section
        title="A joyful celebration for parish families, neighbors, and friends"
        description="Holy Trinity Summer Fest brings the community together for food, games, fellowship, and support for the church building fund."
      >
        <div className="split-layout">
          <article className="highlight-panel">
            <h3>{siteContent.admission.title}</h3>
            <p>{siteContent.admission.summary}</p>
            <ul className="detail-list">
              {siteContent.admission.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="highlight-panel logo-panel">
            <h3>{siteContent.logoPlaceholder.title}</h3>
            <p>{siteContent.logoPlaceholder.description}</p>
            <div className="logo-placeholder" aria-hidden="true">
              <span>Logo Area</span>
            </div>
          </article>
        </div>
      </Section>

      <Section
        title="Plan your visit"
        description="Explore festival details, ways to help, and parish contact information before the celebration begins."
      >
        <CardGrid
          items={siteContent.homeHighlights.map((item) => ({
            title: item.title,
            body: item.body,
            actions: [{ label: item.label, href: item.href, variant: "secondary" }],
          }))}
        />
      </Section>

      <Section
        title="Community sponsor area"
        description={siteContent.sponsorCallout}
      >
        <div className="sponsor-grid">
          {siteContent.sponsors.map((item, index) => (
            <div className="sponsor-placeholder" key={`${item}-${index}`}>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </Section>

      <section className="section cta-ribbon">
        <div className="container cta-ribbon-shell">
          <div>
            <h2>Ready to volunteer, register, or support the building fund?</h2>
          </div>
          <div className="button-row">
            <Link className="button button-primary" href="/get-involved">
              Get Involved
            </Link>
            <Link className="button button-ghost" href="/get-involved">
              Support the Fest
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter
        churchName={siteContent.churchName}
        eventName={siteContent.eventName}
        footerLinks={siteContent.footerLinks}
        socialPlaceholders={siteContent.socialPlaceholders}
      />
    </main>
  );
}
