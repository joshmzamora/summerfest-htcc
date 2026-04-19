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
        title="Choose a Form"
      >
        <SignUpCards items={siteContent.signUps} />
      </Section>

      <Section
        className="involvement-guidance-section"
        title="Need the Parish Payment Portal?"
      >
        <article className="support-panel involvement-support-panel">
          <p>
            For Summer Fest registrations and donation interest, use the forms above. The parish payment
            portal remains available for other church payments.
          </p>
          <div className="button-row">
            <a className="button button-secondary" href={paymentUrl} target="_blank" rel="noreferrer">
              Open Payment Portal
            </a>
          </div>
        </article>
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
