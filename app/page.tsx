import { MotionPanel, MotionPressableLink, MotionStagger } from "@/components/FestivalMotion";
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
        headingMotion="ribbon"
        title="Festival Day for Families, Friends, and Neighbors"
        carnival
      >
        <MotionPanel
          as="article"
          className="process-flow-card expectation-list-card"
          hover="card"
          reveal="card"
        >
          <div className="admission-panel-header">
            <h3>Festival Highlights</h3>
            <p>A full day of food, fun, and friendly competition.</p>
          </div>
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
        </MotionPanel>
      </Section>

      <div className="experience-band experience-band-food">
        <div className="container experience-band-shell">
          <Section
            id="food-drink"
            headingMotion="poster"
            title={siteContent.whatToExpect.foodAndDrink.title}
            description={siteContent.whatToExpect.foodAndDrink.description}
            className="experience-band-section"
            carnival
          >
            <MotionStagger className="experience-list-grid" stagger={0.12}>
              {siteContent.whatToExpect.foodAndDrink.groups.map((group) => (
                <MotionPanel
                  as="article"
                  className="process-flow-card expectation-list-card"
                  hover="card"
                  key={group.title}
                  reveal="card"
                >
                  <div className="admission-panel-header">
                    <h3>{group.title}</h3>
                  </div>
                  <ul className="detail-list">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </MotionPanel>
              ))}
            </MotionStagger>
            <MotionPanel className="section-note-motion" reveal="sticker">
              <p className="section-note">
              {siteContent.whatToExpect.foodAndDrink.note}
              </p>
            </MotionPanel>
          </Section>

          <Section
            id="activities-games"
            headingMotion="signboard"
            title={siteContent.whatToExpect.activitiesAndGames.title}
            description={siteContent.whatToExpect.activitiesAndGames.description}
            className="experience-band-section"
            carnival
          >
            <MotionStagger className="experience-list-grid" stagger={0.12}>
              {siteContent.whatToExpect.activitiesAndGames.groups.map((group) => (
                <MotionPanel
                  as="article"
                  className="process-flow-card expectation-list-card"
                  hover="card"
                  key={group.title}
                  reveal="card"
                >
                  <div className="admission-panel-header">
                    <h3>{group.title}</h3>
                  </div>
                  <ul className="detail-list">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </MotionPanel>
              ))}
            </MotionStagger>
            <MotionPanel className="section-note-motion" reveal="sticker">
              <p className="section-note">
              {siteContent.whatToExpect.activitiesAndGames.note}
              </p>
            </MotionPanel>
          </Section>
        </div>
      </div>

      <section className="section cta-ribbon">
        <MotionPanel as="div" className="container cta-ribbon-shell" hover="panel" reveal="ribbon">
          <div>
            <h2>Ready to register, volunteer, or donate?</h2>
          </div>
          <div className="button-row">
            <MotionPressableLink className="button button-primary" href="/get-involved">
              <span className="button-label">Get Involved</span>
            </MotionPressableLink>
            <MotionPressableLink className="button button-ghost" href="/get-involved">
              <span className="button-label">Open Live Forms</span>
            </MotionPressableLink>
          </div>
        </MotionPanel>
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
