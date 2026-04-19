import { FaqList } from "@/components/FaqList";
import { InfoBar } from "@/components/InfoBar";
import { NavBar } from "@/components/NavBar";
import { PageIntro } from "@/components/PageIntro";
import { Section } from "@/components/Section";
import { SiteFooter } from "@/components/SiteFooter";
import { siteContent } from "@/data/site-content";
import Link from "next/link";

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
        description={siteContent.planYourVisit.intro.description}
      />
      <InfoBar items={siteContent.planYourVisit.quickInfo} />

      <Section
        title={siteContent.planYourVisit.sectionIntro.title}
        description={siteContent.planYourVisit.sectionIntro.description}
      >
        <div className="split-layout visit-overview-grid">
          <article className="highlight-panel admission-panel">
            <div className="admission-panel-header">
              <h3>{siteContent.planYourVisit.about.title}</h3>
              <p>{siteContent.planYourVisit.about.summary}</p>
            </div>
            <ul className="detail-list">
              {siteContent.planYourVisit.about.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="highlight-panel admission-panel">
            <div className="admission-panel-header">
              <h3>{siteContent.planYourVisit.admissionOverview.title}</h3>
              <p>{siteContent.planYourVisit.admissionOverview.summary}</p>
            </div>
            <ul className="detail-list">
              {siteContent.planYourVisit.admissionOverview.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="button-row visit-overview-actions">
              <Link className="button button-primary" href={siteContent.planYourVisit.admissionOverview.cta.href}>
                {siteContent.planYourVisit.admissionOverview.cta.label}
              </Link>
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
