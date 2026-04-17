import { CardGrid } from "@/components/Cards";
import { NavBar } from "@/components/NavBar";
import { PageIntro } from "@/components/PageIntro";
import { Section } from "@/components/Section";
import { SiteFooter } from "@/components/SiteFooter";
import { paymentUrl, siteContent } from "@/data/site-content";

export default function SupportPage() {
  return (
    <main>
      <NavBar
        churchName={siteContent.churchName}
        eventName={siteContent.eventName}
        navigation={siteContent.navigation}
      />
      <PageIntro {...siteContent.pageIntros.support} />

      <Section
        title="Support options for the festival and the parish"
        description="This page keeps support details simple: easy to update, easy to navigate, and clear about what is already live."
      >
        <div className="split-layout">
          <CardGrid
            className="single-column"
            items={siteContent.donationOptions.map((item) => ({
              title: item,
              body: "Thank you for helping strengthen this community effort.",
            }))}
          />
          <article className="support-panel">
            <h3>Current Vanco payment portal</h3>
            <p>
              The current payment link can be used for available Summer Fest and parish-related payments,
              including vendor booth and wristband-related options already set up in Vanco.
            </p>
            <a className="button button-primary" href={paymentUrl} target="_blank" rel="noreferrer">
              Support the Building Fund
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
