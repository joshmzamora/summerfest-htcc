import { CardGrid } from "@/components/Cards";
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
        title="Choose the form that fits your role"
        description="The two live Summer Fest forms below are the main sign-up path for volunteers, vendors, tournament entries, silent auction items, and monetary donations."
      >
        <SignUpCards items={siteContent.signUps} />
      </Section>

      <Section
        className="involvement-guidance-section"
        title="How these forms are being used"
        description="Registration and donations now have their own direct links, so guests can go straight to the right form without sorting through a general sign-up page."
      >
        <div className="split-layout involvement-guidance-layout">
          <CardGrid className="single-column" items={siteContent.involvementHighlights} />
          <article className="support-panel involvement-support-panel">
            <h3>Other parish payment needs</h3>
            <p>
              If you need the parish payment portal for other church payments, it is still available. For
              Summer Fest registrations and donation interest, please use the Google Forms above first.
            </p>
            <ul className="detail-list">
              {siteContent.donationOptions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="button-row">
              <a className="button button-secondary" href={paymentUrl} target="_blank" rel="noreferrer">
                Open Payment Portal
              </a>
            </div>
          </article>
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
