import { MotionPanel, MotionPressableLink } from "@/components/FestivalMotion";
import { NavBar } from "@/components/NavBar";
import { PageIntro } from "@/components/PageIntro";
import { Section } from "@/components/Section";
import { SignUpCards } from "@/components/SignUpCards";
import { SiteFooter } from "@/components/SiteFooter";
import { paymentUrl, siteContent } from "@/data/site-content";

export default function GetInvolvedPage() {
  return (
    <main className="get-involved-page">
      <NavBar
        churchName={siteContent.churchName}
        eventName={siteContent.eventName}
        navigation={siteContent.navigation}
      />
      <PageIntro {...siteContent.pageIntros.involved} />

      <Section
        className="involvement-forms-section"
        headingMotion="poster"
        title="Choose a Form"
      >
        <SignUpCards items={siteContent.signUps} />
      </Section>

      <Section
        className="involvement-guidance-section"
        headingMotion="ribbon"
        title="Need the Parish Payment Portal?"
      >
        <MotionPanel as="article" className="support-panel involvement-support-panel" hover="panel" reveal="signboard">
          <p>
            For Summer Fest registrations and donation interest, use the forms above. The parish payment
            portal remains available for other church payments.
          </p>
          <div className="button-row">
            <MotionPressableLink className="button button-secondary" external href={paymentUrl}>
              <span className="button-label">Open Payment Portal</span>
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
