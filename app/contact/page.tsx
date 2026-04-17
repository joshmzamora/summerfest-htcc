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
            <h3>Summer Fest form links</h3>
            <p>
              Use the Get Involved page for the live Summer Fest Registration form and Summer Fest
              Donation form.
            </p>
          </article>
          <article className="content-card">
            <h3>Parish payment portal</h3>
            <p>
              The parish payment portal is still available for church payments, but Summer Fest sign-ups
              and donation responses now use the live Google Forms.
            </p>
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
        socialLinks={siteContent.socialLinks}
      />
    </main>
  );
}
