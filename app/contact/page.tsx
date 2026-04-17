import { NavBar } from "@/components/NavBar";
import { PageIntro } from "@/components/PageIntro";
import { Section } from "@/components/Section";
import { SiteFooter } from "@/components/SiteFooter";
import { paymentUrl, siteContent } from "@/data/site-content";

export default function ContactPage() {
  return (
    <main>
      <NavBar
        churchName={siteContent.churchName}
        eventName={siteContent.eventName}
        navigation={siteContent.navigation}
      />
      <PageIntro {...siteContent.pageIntros.contactPage} />

      <Section
        title={siteContent.contact.heading}
        description={siteContent.contact.body}
      >
        <div className="contact-grid">
          <article className="content-card">
            <h3>Future contact area</h3>
            <p>Reserved for email, parish office phone number, and event coordination details.</p>
          </article>
          <article className="content-card">
            <h3>Need a current link?</h3>
            <p>Vendor-related payment access is live now, and more sign-up links can be added here later.</p>
            <a className="button button-secondary" href={paymentUrl} target="_blank" rel="noreferrer">
              Open Current Payment Portal
            </a>
          </article>
        </div>
      </Section>

      <SiteFooter
        churchName={siteContent.churchName}
        eventName={siteContent.eventName}
        footerLinks={siteContent.footerLinks}
        socialPlaceholders={siteContent.socialPlaceholders}
      />
    </main>
  );
}
