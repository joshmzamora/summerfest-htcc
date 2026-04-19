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

export default function WhatToExpectPage() {
  return (
    <main className="what-to-expect-page">
      <NavBar
        churchName={siteContent.churchName}
        eventName={siteContent.eventName}
        navigation={siteContent.navigation}
      />
      <PageIntro
        title={siteContent.whatToExpect.intro.title}
        description={siteContent.whatToExpect.intro.description}
      />

      <div className="experience-band experience-band-ticketing">
        <div className="container experience-band-shell">
          <Section
            title={siteContent.whatToExpect.wristbandsOrTickets.title}
            description={siteContent.whatToExpect.wristbandsOrTickets.description}
            className="experience-band-section"
          >
            <div className="admission-explainer">
              <div className="admission-explainer-heading">
                <h3>Choose the option that fits your day</h3>
                <p>Wristbands cover unlimited play, while tickets let you pay only for what you use.</p>
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
            </div>
          </Section>

          <Section
            title={siteContent.whatToExpect.pricing.title}
            description={siteContent.whatToExpect.pricing.description}
            className="experience-band-section"
          >
            <div className="pricing-board">
              <div className="pricing-board-header">
                <h3>Early bird options</h3>
                <p>Pick the option that matches how you want to spend the day, then head to the payment page to reserve it.</p>
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
            </div>
          </Section>
        </div>
      </div>

      <div className="experience-band experience-band-food">
        <div className="container experience-band-shell">
          <Section
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

      <SiteFooter
        churchName={siteContent.churchName}
        eventName={siteContent.eventName}
        footerLinks={siteContent.footerLinks}
        socialLinks={siteContent.socialLinks}
      />
    </main>
  );
}
