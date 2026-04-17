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
        title="A real festival day for families, friends, and neighbors"
        description="Summer Fest brings food booths, games, tournaments, and the silent auction together to support the Holy Trinity building fund."
      >
        <div className="split-layout festival-detail-grid">
          <article className="highlight-panel">
            <h3>Festival at a glance</h3>
            <p>Classic parish festival energy with clear event details and activities for every age group.</p>
            <ul className="detail-list">
              {[
                "Food booths and sweet treats all afternoon",
                "Games, family activities, and tournament competition",
                "Silent auction and community support for the building fund",
                "Free admission and open to the wider community",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="highlight-panel logo-panel festival-board">
            <h3>Festival board</h3>
            <p>Quick wayfinding for guests planning the day.</p>
            <div className="festival-board-grid" aria-label="Festival area highlights">
              <div>
                <span>Food</span>
                <strong>Main Booth Row</strong>
              </div>
              <div>
                <span>Games</span>
                <strong>Kid Zone & Midway</strong>
              </div>
              <div>
                <span>Tournaments</span>
                <strong>Volleyball + Washers</strong>
              </div>
              <div>
                <span>Auction</span>
                <strong>Parish Hall Tent</strong>
              </div>
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
        title="Community partner banner row"
        description={siteContent.sponsorCallout}
      >
        <div className="sponsor-grid">
          {siteContent.sponsors.map((item, index) => (
            <div className="sponsor-placeholder" key={`${item}-${index}`}>
              <span>{item.replace("logo", `spot ${index + 1}`)}</span>
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
