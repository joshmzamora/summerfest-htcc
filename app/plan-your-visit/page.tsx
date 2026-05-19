import { FaqList } from "@/components/FaqList";
import { MotionPanel, MotionPressableLink } from "@/components/FestivalMotion";
import { InfoBar } from "@/components/InfoBar";
import { NavBar } from "@/components/NavBar";
import { PageIntro } from "@/components/PageIntro";
import { Section } from "@/components/Section";
import { SiteFooter } from "@/components/SiteFooter";
import { siteContent } from "@/data/site-content";

export default function PlanYourVisitPage() {
  return (
    <main className="plan-your-visit-page">
      <NavBar
        churchName={siteContent.churchName}
        eventName={siteContent.eventName}
        navigation={siteContent.navigation}
      />
      <PageIntro title={siteContent.planYourVisit.intro.title} variant="text-first" />
      <InfoBar title="Event Details" items={siteContent.planYourVisit.quickInfo} carnival />

      <Section
        className="visit-purchase-section"
        headingMotion="poster"
        title={siteContent.planYourVisit.purchasePrompt.title}
        description={siteContent.planYourVisit.purchasePrompt.summary}
        carnival
      >
        <MotionPanel as="article" className="process-flow-card visit-purchase-card" hover="card" reveal="card">
          <div className="admission-panel-header">
            <h3>{siteContent.planYourVisit.purchasePrompt.ctaLabel}</h3>
            <p>{siteContent.buyWristbandsTickets.pricing.urgency}.</p>
          </div>
          <div className="button-row visit-overview-actions">
            <MotionPressableLink className="button button-primary" href={siteContent.planYourVisit.purchasePrompt.href}>
              <span className="button-label">{siteContent.planYourVisit.purchasePrompt.ctaLabel}</span>
            </MotionPressableLink>
          </div>
        </MotionPanel>
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
