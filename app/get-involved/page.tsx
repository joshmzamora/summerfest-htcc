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
        title="Simple, future-friendly registration spaces"
        description="Each card below includes a clear next step now and a reserved area for future Google Form embeds."
      >
        <SignUpCards items={siteContent.signUps} />
      </Section>

      <Section
        title="Vendor info, tournament registration, and support"
        description="Get Involved also keeps the key participation and support areas together so families, teams, and supporters know exactly where to start."
      >
        <div className="split-layout">
          <CardGrid className="single-column" items={siteContent.involvementHighlights} />
          <article className="support-panel">
            <h3>Support the building fund</h3>
            <p>
              The current payment link can be used for available Summer Fest and parish-related payments,
              including vendor booth and wristband-related options already set up in Vanco.
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
