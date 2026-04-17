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
            <h3>Parish contact details</h3>
            <p>Email, parish office phone number, and event coordination details will be posted here.</p>
          </article>
          <article className="content-card">
            <h3>Payment and registration link</h3>
            <p>The parish payment link is available now, and additional sign-up details will be posted here as they are finalized.</p>
            <a className="button button-secondary" href={paymentUrl} target="_blank" rel="noreferrer">
              Open Payment Portal
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
