import { CardGrid } from "@/components/Cards";
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
      return (
        <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
          <path
            d="M20 15h24a6 6 0 0 1 6 6v22a6 6 0 0 1-6 6H20a6 6 0 0 1-6-6V21a6 6 0 0 1 6-6Z"
            stroke="currentColor"
            strokeWidth="3.5"
          />
          <path d="M24 15v34M40 15v34" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="32" cy="32" r="5.5" fill="currentColor" />
          <path d="M10 23h8M10 41h8M46 23h8M46 41h8" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      );
    case "tickets":
      return (
        <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
          <path
            d="M14 22a4 4 0 0 0 4-4h32a4 4 0 0 0 4 4v8a4 4 0 0 0 0 8v8a4 4 0 0 0-4 4H18a4 4 0 0 0-4-4v-8a4 4 0 0 0 0-8v-8Z"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          <path d="M32 20v24" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeDasharray="4 5" />
          <path d="M24 31h0.01M40 31h0.01" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

export default function EventInfoPage() {
  return (
    <main>
      <NavBar
        churchName={siteContent.churchName}
        eventName={siteContent.eventName}
        navigation={siteContent.navigation}
      />
      <PageIntro
        title="Everything you need to know before festival day"
        description="Find the essentials for festival day, including event details, food, activities, and frequently asked questions."
      />
      <InfoBar items={siteContent.quickInfo} />

      <Section
        title="About Summer Fest"
        description="Holy Trinity Summer Fest is a welcoming community celebration with food, fellowship, and family fun for all ages."
      >
        <div className="split-layout event-info-about-layout">
          <article className="highlight-panel admission-panel">
            <div className="admission-panel-header">
              <h3>{siteContent.admission.title}</h3>
              <p>{siteContent.admission.summary}</p>
            </div>
            <ul className="detail-list">
              {siteContent.admission.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <div className="admission-explainer">
            <div className="admission-explainer-heading">
              <h3>Wristbands or tickets?</h3>
              <p>Here&apos;s the easiest way to choose what fits your day at the festival.</p>
            </div>
            <div className="admission-explainer-grid">
              {siteContent.admission.explainer.map((item) => (
                <article className="admission-explainer-card" key={item.title}>
                  <div className={`admission-explainer-icon icon-${item.icon}`}>
                    <AdmissionExplainerIcon icon={item.icon} />
                  </div>
                  <span className="admission-explainer-label">{item.title}</span>
                  <h4>{item.headline}</h4>
                  <p>{item.description}</p>
                  {item.note ? <em>{item.note}</em> : null}
                </article>
              ))}
            </div>
          </div>
          <div className="pricing-board">
            <div className="pricing-board-header">
              <h3>Pricing</h3>
              <p>Wristbands, ticket bundles, and vendor booth fees can be purchased online now.</p>
            </div>
            <div className="pricing-grid">
              {siteContent.admission.pricing.map((item) => (
                <article className="pricing-card" key={item.title}>
                  <div className="pricing-card-topline">
                    <span className="pricing-label">{item.title}</span>
                    <span className="pricing-badge">Early bird pricing</span>
                  </div>
                  <strong>{item.price}</strong>
                  <p>{item.description}</p>
                  {item.note ? <em>{item.note}</em> : null}
                </article>
              ))}
            </div>
            <div className="button-row pricing-board-actions">
              <a
                className="button button-primary"
                href={siteContent.admission.cta.href}
                target={siteContent.admission.cta.external ? "_blank" : undefined}
                rel={siteContent.admission.cta.external ? "noreferrer" : undefined}
              >
                {siteContent.admission.cta.label}
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="Food & drink"
        description="Festival favorites, sweet treats, and refreshing drinks will be listed here as the menu comes together."
      >
        <CardGrid
          items={siteContent.foodAndDrink.map((item) => ({
            title: item,
            body:
              item === "Margaritas" || item === "Beer"
                ? "Served in a tasteful, responsible festival setting for adult guests."
                : "Planned menu item for the day's food and refreshment lineup.",
          }))}
        />
        <p className="section-note">{siteContent.foodNote}</p>
      </Section>

      <Section
        title="Activities & games"
        description="This part of the celebration is planned for all ages, with friendly competition, family fun, and more to enjoy."
      >
        <CardGrid
          items={siteContent.activities.map((item) => ({
            title: item,
            body: "Part of the growing Summer Fest lineup.",
          }))}
        />
        <p className="section-note">{siteContent.activitiesNote}</p>
      </Section>

      <Section
        title="Frequently asked questions"
        description="These answers cover the most common questions about attendance, seating, parking, pets, and getting involved."
      >
        <FaqList items={siteContent.faqs} />
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
