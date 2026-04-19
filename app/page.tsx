import Link from "next/link";

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
          <p>A full day of food, fun, and friendly competition.</p>
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

      <div className="experience-band experience-band-food">
        <div className="container experience-band-shell">
          <Section
            id="food-drink"
            title={siteContent.whatToExpect.foodAndDrink.title}
            description={siteContent.whatToExpect.foodAndDrink.description}
            className="experience-band-section"
          >
            <div className="experience-list-grid">
              {siteContent.whatToExpect.foodAndDrink.groups.map((group) => (
                <article className="process-flow-card expectation-list-card" key={group.title}>
                  <div className="admission-panel-header">
                    <h3>{group.title}</h3>
                  </div>
                  <ul className="detail-list">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <p className="section-note">{siteContent.whatToExpect.foodAndDrink.note}</p>
          </Section>

          <Section
            id="activities-games"
            title={siteContent.whatToExpect.activitiesAndGames.title}
            description={siteContent.whatToExpect.activitiesAndGames.description}
            className="experience-band-section"
          >
            <div className="experience-list-grid">
              {siteContent.whatToExpect.activitiesAndGames.groups.map((group) => (
                <article className="process-flow-card expectation-list-card" key={group.title}>
                  <div className="admission-panel-header">
                    <h3>{group.title}</h3>
                  </div>
                  <ul className="detail-list">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <p className="section-note">{siteContent.whatToExpect.activitiesAndGames.note}</p>
          </Section>
        </div>
      </div>

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
