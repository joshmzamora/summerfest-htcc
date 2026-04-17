import { CardGrid } from "@/components/Cards";
import { NavBar } from "@/components/NavBar";
import { PageIntro } from "@/components/PageIntro";
import { Section } from "@/components/Section";
import { SignUpCards } from "@/components/SignUpCards";
import { SiteFooter } from "@/components/SiteFooter";
import { paymentUrl, siteContent } from "@/data/site-content";

export default function GetInvolvedPage() {
  return (
    <main>
      <NavBar
        churchName={siteContent.churchName}
        eventName={siteContent.eventName}
        navigation={siteContent.navigation}
      />
      <PageIntro {...siteContent.pageIntros.involved} />

      <Section
        title="Ways to join in"
        description="Use the sections below to volunteer, register, or follow the latest sign-up information for Summer Fest."
      >
        <SignUpCards items={siteContent.signUps} />
      </Section>

      <Section
        title="Vendor info, tournament registration, and support"
        description="Families, teams, vendors, and supporters can all start here for festival participation and support information."
      >
        <div className="split-layout">
          <CardGrid className="single-column" items={siteContent.involvementHighlights} />
          <article className="support-panel">
            <h3>Support the building fund</h3>
            <p>
              The parish payment link can be used for available Summer Fest and church-related payments,
              including vendor booth and wristband-related options listed in Vanco.
            </p>
            <ul className="detail-list">
              {siteContent.donationOptions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="button-row">
              <a className="button button-primary" href={paymentUrl} target="_blank" rel="noreferrer">
                Support the Fest
              </a>
            </div>
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
