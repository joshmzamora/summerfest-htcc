import { FaqList } from "@/components/FaqList";
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
    <main>
      <NavBar
        churchName={siteContent.churchName}
        eventName={siteContent.eventName}
        navigation={siteContent.navigation}
      />
      <PageIntro
        title={siteContent.planYourVisit.intro.title}
      />
      <InfoBar title="Event Details" items={siteContent.planYourVisit.quickInfo} />

      <Section
        id="admission-overview"
        title={siteContent.planYourVisit.admissionOverview.title}
        description={siteContent.planYourVisit.admissionOverview.summary}
      >
        <div className="split-layout visit-overview-grid">
          <article className="admission-explainer">
            <div className="admission-explainer-heading">
              <h3>{siteContent.whatToExpect.wristbandsOrTickets.title}</h3>
              <p>{siteContent.whatToExpect.wristbandsOrTickets.description}</p>
            </div>
            <div className="admission-explainer-grid">
              {siteContent.whatToExpect.wristbandsOrTickets.items.map((item) => (
                <article className="admission-explainer-card" key={item.title}>
                  <div className={`admission-explainer-icon icon-${item.icon}`}>
                    <AdmissionExplainerIcon icon={item.icon} />
                  </div>
                  <span className="admission-explainer-label">{item.title}</span>
                  <h4>{item.headline}</h4>
                  <p>{item.description}</p>
                  {"note" in item && item.note ? <em>{item.note}</em> : null}
                </article>
              ))}
            </div>
          </article>

          <article className="pricing-board">
            <div className="pricing-board-header">
              <h3>{siteContent.whatToExpect.pricing.title}</h3>
              <p>{siteContent.whatToExpect.pricing.description}</p>
            </div>
            <div className="pricing-grid">
              {siteContent.whatToExpect.pricing.items.map((item) => (
                <a
                  className="pricing-card"
                  key={item.title}
                  href={siteContent.whatToExpect.pricing.cta.href}
                  target={siteContent.whatToExpect.pricing.cta.external ? "_blank" : undefined}
                  rel={siteContent.whatToExpect.pricing.cta.external ? "noreferrer" : undefined}
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
                </a>
              ))}
            </div>
            <div className="button-row pricing-board-actions">
              <a
                className="button button-primary"
                href={siteContent.whatToExpect.pricing.cta.href}
                target={siteContent.whatToExpect.pricing.cta.external ? "_blank" : undefined}
                rel={siteContent.whatToExpect.pricing.cta.external ? "noreferrer" : undefined}
              >
                {siteContent.whatToExpect.pricing.cta.label}
              </a>
            </div>
          </article>
        </div>
      </Section>

      <Section
        title="Frequently Asked Questions"
        description="These answers cover the most common logistics questions about attendance, seating, parking, pets, and getting involved."
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
