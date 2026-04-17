import { CardGrid } from "@/components/Cards";
import { InfoBar } from "@/components/InfoBar";
import { NavBar } from "@/components/NavBar";
import { PageIntro } from "@/components/PageIntro";
import { Section } from "@/components/Section";
import { SiteFooter } from "@/components/SiteFooter";
import { siteContent } from "@/data/site-content";

export default function AboutPage() {
  return (
    <main>
      <NavBar
        churchName={siteContent.churchName}
        eventName={siteContent.eventName}
        navigation={siteContent.navigation}
      />
      <PageIntro {...siteContent.pageIntros.about} />
      <InfoBar items={siteContent.quickInfo} />

      <Section
        title="Free to attend, with festival options coming soon"
        description="Admission is free, and final pricing details for wristbands, tickets, bundles, and accepted payment methods will be added as soon as they are confirmed."
      >
        <div className="split-layout">
          <article className="highlight-panel">
            <h3>What guests can expect</h3>
            <p>{siteContent.admission.summary}</p>
            <ul className="detail-list">
              {siteContent.admission.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <CardGrid
            className="single-column"
            items={siteContent.admission.placeholders.map((item) => ({
              title: item,
              body: "This section is ready for a straightforward update once organizers finalize the remaining details.",
            }))}
          />
        </div>
      </Section>

      <Section
        title="Policies and guest information"
        description="These notes are here to help the day feel welcoming, comfortable, and easy to navigate for the full community."
      >
        <CardGrid
          items={siteContent.policies.map((item) => ({
            title: item.split(".")[0],
            body: item,
          }))}
        />
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
