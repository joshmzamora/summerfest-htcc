import { FaqList } from "@/components/FaqList";
import { MotionPanel, MotionPressableLink, MotionStagger } from "@/components/FestivalMotion";
import { InfoBar } from "@/components/InfoBar";
import { NavBar } from "@/components/NavBar";
import { PageIntro } from "@/components/PageIntro";
import { Section } from "@/components/Section";
import { SiteFooter } from "@/components/SiteFooter";
import { siteContent } from "@/data/site-content";

function AdmissionExplainerIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "wristband":
      return <span className="admission-explainer-glyph admission-explainer-glyph-wristband" aria-hidden="true" />;
    case "tickets":
      return <span className="admission-explainer-glyph admission-explainer-glyph-tickets" aria-hidden="true" />;
    default:
      return null;
  }
}

export default function PlanYourVisitPage() {
  return (
    <main className="plan-your-visit-page">
      <NavBar
        churchName={siteContent.churchName}
        eventName={siteContent.eventName}
        navigation={siteContent.navigation}
      />
      <PageIntro title={siteContent.planYourVisit.intro.title} variant="text-first" />
      <InfoBar title="Event Details" items={siteContent.planYourVisit.quickInfo} />

      <Section
        className="visit-admission-section"
        id="admission-overview"
        headingMotion="ribbon"
        title={siteContent.planYourVisit.admissionOverview.title}
        description={siteContent.planYourVisit.admissionOverview.summary}
        carnival
      >
        <div className="split-layout visit-overview-grid">
          <MotionPanel as="article" className="admission-explainer" hover="panel" reveal="signboard">
            <div className="admission-explainer-heading">
              <h3>{siteContent.whatToExpect.wristbandsOrTickets.title}</h3>
              <p>{siteContent.whatToExpect.wristbandsOrTickets.description}</p>
            </div>
            <MotionStagger className="admission-explainer-grid" stagger={0.1}>
              {siteContent.whatToExpect.wristbandsOrTickets.items.map((item) => (
                <MotionPanel
                  as="article"
                  className="admission-explainer-card"
                  hover="card"
                  key={item.title}
                  reveal="card"
                >
                  <div className={`admission-explainer-icon icon-${item.icon}`}>
                    <AdmissionExplainerIcon icon={item.icon} />
                  </div>
                  <span className="admission-explainer-label">{item.title}</span>
                  <h4>{item.headline}</h4>
                  <p>{item.description}</p>
                  {"note" in item && item.note ? <em>{item.note}</em> : null}
                </MotionPanel>
              ))}
            </MotionStagger>
          </MotionPanel>

          <MotionPanel as="article" className="pricing-board" hover="panel" reveal="poster">
            <div className="pricing-board-header">
              <h3>{siteContent.whatToExpect.pricing.title}</h3>
              <p>{siteContent.whatToExpect.pricing.description}</p>
            </div>
            <MotionStagger className="pricing-grid" stagger={0.1}>
              {siteContent.whatToExpect.pricing.items.map((item) => (
                <MotionPressableLink
                  className="pricing-card"
                  external={siteContent.whatToExpect.pricing.cta.external}
                  fillWidth
                  key={item.title}
                  href={siteContent.whatToExpect.pricing.cta.href}
                  aria-label={`Open payment link for ${item.title}`}
                >
                  <div className="pricing-card-summary">
                    <strong>{item.price}</strong>
                    <div className="pricing-card-topline">
                      <span className="pricing-label">{item.title}</span>
                      <span className="pricing-badge">Early bird pricing</span>
                    </div>
                  </div>
                  <p>{item.description}</p>
                  {"note" in item && item.note ? <em>{item.note}</em> : null}
                </MotionPressableLink>
              ))}
            </MotionStagger>
            <div className="button-row pricing-board-actions">
              <MotionPressableLink
                className="button button-primary"
                external={siteContent.whatToExpect.pricing.cta.external}
                href={siteContent.whatToExpect.pricing.cta.href}
              >
                <span className="button-label">{siteContent.whatToExpect.pricing.cta.label}</span>
              </MotionPressableLink>
            </div>
          </MotionPanel>
        </div>
      </Section>

      <Section
        headingMotion="signboard"
        title="Frequently Asked Questions"
        description="These answers cover the most common logistics questions about attendance, seating, parking, pets, and getting involved."
        carnival
      >
        <FaqList items={siteContent.planYourVisit.faqs} />
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
