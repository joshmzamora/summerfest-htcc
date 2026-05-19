import { MotionPanel, MotionPressableLink, MotionStagger } from "@/components/FestivalMotion";
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

export default function BuyWristbandsTicketsPage() {
  const pageContent = siteContent.buyWristbandsTickets;

  return (
    <main className="buy-wristbands-tickets-page">
      <NavBar
        churchName={siteContent.churchName}
        eventName={siteContent.eventName}
        navigation={siteContent.navigation}
      />
      <PageIntro title={pageContent.intro.title} description={pageContent.intro.description} variant="text-first" />

      <Section
        className="visit-admission-section"
        id="admission-overview"
        headingMotion="ribbon"
        title={pageContent.admissionOverview.title}
        description={pageContent.admissionOverview.summary}
        carnival
      >
        <div className="split-layout visit-overview-grid">
          <MotionPanel as="article" className="admission-explainer" hover="panel" reveal="signboard">
            <div className="admission-explainer-heading">
              <h3>{pageContent.wristbandsOrTickets.title}</h3>
              <p>{pageContent.wristbandsOrTickets.description}</p>
            </div>
            <MotionStagger className="admission-explainer-grid" stagger={0.1}>
              {pageContent.wristbandsOrTickets.items.map((item) => (
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
              <span>{pageContent.pricing.urgency}</span>
              <h3>{pageContent.pricing.title}</h3>
              <p>{pageContent.pricing.description}</p>
            </div>
            <MotionStagger className="pricing-grid" stagger={0.1}>
              {pageContent.pricing.items.map((item) => (
                <MotionPressableLink
                  className="pricing-card"
                  external={pageContent.pricing.cta.external}
                  fillWidth
                  key={item.title}
                  href={pageContent.pricing.cta.href}
                  aria-label={`Open payment link for ${item.title}`}
                >
                  <div className="pricing-card-summary">
                    <strong>{item.price}</strong>
                    <div className="pricing-card-topline">
                      <span className="pricing-label">{item.title}</span>
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
                external={pageContent.pricing.cta.external}
                href={pageContent.pricing.cta.href}
              >
                <span className="button-label">{pageContent.pricing.cta.label}</span>
              </MotionPressableLink>
            </div>
          </MotionPanel>
        </div>
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
