import { MotionPanel, MotionPressableLink, MotionStagger } from "@/components/FestivalMotion";
import { NavBar } from "@/components/NavBar";
import { PageIntro } from "@/components/PageIntro";
import { Section } from "@/components/Section";
import { SiteFooter } from "@/components/SiteFooter";
import { siteContent } from "@/data/site-content";

export default function DayOfGuidePage() {
  return (
    <main className="day-of-guide-page">
      <NavBar
        churchName={siteContent.churchName}
        eventName={siteContent.eventName}
        navigation={siteContent.navigation}
      />
      <PageIntro {...siteContent.dayOfGuide.intro} variant="text-first" />

      <Section
        className="day-of-schedule-section"
        headingMotion="poster"
        title={siteContent.dayOfGuide.schedule.title}
        description={siteContent.dayOfGuide.schedule.description}
        carnival
      >
        <MotionStagger className="day-of-schedule-grid" stagger={0.1}>
          {siteContent.dayOfGuide.schedule.items.map((item) => (
            <MotionPanel
              as="article"
              className="process-flow-card day-of-schedule-card"
              hover="card"
              key={item.time}
              reveal="card"
            >
              <div className="day-of-card-header">
                <span className="day-of-time-chip">Time slot</span>
                <h3>{item.time}</h3>
              </div>
              <ul className="detail-list day-of-detail-list">
                {item.events.map((event) => (
                  <li key={event}>{event}</li>
                ))}
              </ul>
            </MotionPanel>
          ))}
        </MotionStagger>
        <MotionPanel className="section-note-motion" reveal="sticker">
          <p className="section-note">{siteContent.dayOfGuide.schedule.note}</p>
        </MotionPanel>
      </Section>

      <Section
        className="day-of-activities-section"
        headingMotion="signboard"
        title={siteContent.dayOfGuide.activities.title}
        description={siteContent.dayOfGuide.activities.description}
        carnival
      >
        <MotionStagger className="day-of-activity-grid" stagger={0.1}>
          {siteContent.dayOfGuide.activities.groups.map((group) => (
            <MotionPanel
              as="article"
              className="process-flow-card expectation-list-card day-of-activity-card"
              hover="card"
              key={group.title}
              reveal="card"
            >
              <div className="admission-panel-header day-of-activity-header">
                <span className="day-of-group-chip">Tentative</span>
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
          <p className="section-note">{siteContent.dayOfGuide.activities.note}</p>
        </MotionPanel>
      </Section>

      <Section
        className="day-of-guide-logistics-section"
        headingMotion="ribbon"
        title={siteContent.dayOfGuide.logisticsCta.title}
        carnival
      >
        <MotionPanel as="article" className="support-panel day-of-guide-logistics-card" hover="panel" reveal="signboard">
          <p>{siteContent.dayOfGuide.logisticsCta.description}</p>
          <div className="button-row">
            <MotionPressableLink className="button button-secondary" href={siteContent.dayOfGuide.logisticsCta.href}>
              <span className="button-label">{siteContent.dayOfGuide.logisticsCta.label}</span>
            </MotionPressableLink>
          </div>
        </MotionPanel>
      </Section>

      <SiteFooter
        churchName={siteContent.churchName}
        eventName={siteContent.eventName}
        footerLinks={siteContent.footerLinks}
        socialLinks={siteContent.socialLinks}
      />
    </main>
  );
}
