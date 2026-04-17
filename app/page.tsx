import Link from "next/link";

import { CardGrid } from "@/components/Cards";
import { HeroSection } from "@/components/HeroSection";
import { InfoBar } from "@/components/InfoBar";
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

      <InfoBar items={siteContent.quickInfo} />

      <Section
        title="A lively invitation for parish families, neighbors, and friends"
        description="The homepage now acts like the front gate to the festival: colorful, easy to follow, and built to guide visitors into the right page quickly."
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
        title="Each topic now has its own page"
        description="Use the main sections below to jump straight into the parts of the event most relevant to your family, group, or volunteer plans."
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
