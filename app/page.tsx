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
        countdownTarget={siteContent.calendarEvent.start}
        calendarHref="/api/calendar"
        calendarLabel="Add to Calendar"
      />

      <Section
        title="Festival Day for Families, Friends, and Neighbors"
      >
        <article className="highlight-panel">
          <ul className="detail-list">
            {[
              "Food booths and sweet treats",
              "Festival games and activities for the family",
              "Volleyball and washers tournaments",
              "Silent auction",
              "Free admission",
              "Open to the community",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </Section>

      <Section
        title="Plan your visit"
        description="Find the key details, festival experience, and ways to participate before the celebration begins."
      >
        <CardGrid
          items={siteContent.homeHighlights.map((item) => ({
            title: item.title,
            body: item.body,
            actions: [{ label: item.label, href: item.href, variant: "secondary" }],
          }))}
        />
      </Section>

      <section className="section cta-ribbon">
        <div className="container cta-ribbon-shell">
          <div>
            <h2>Ready to register, volunteer, or donate?</h2>
          </div>
          <div className="button-row">
            <Link className="button button-primary" href="/get-involved">
              Get Involved
            </Link>
            <Link className="button button-ghost" href="/get-involved">
              Open Live Forms
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter
        churchName={siteContent.churchName}
        eventName={siteContent.eventName}
        footerLinks={siteContent.footerLinks}
        socialLinks={siteContent.socialLinks}
      />
    </main>
  );
}
