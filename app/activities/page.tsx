import { CardGrid } from "@/components/Cards";
import { NavBar } from "@/components/NavBar";
import { PageIntro } from "@/components/PageIntro";
import { Section } from "@/components/Section";
import { SiteFooter } from "@/components/SiteFooter";
import { siteContent } from "@/data/site-content";

export default function ActivitiesPage() {
  return (
    <main>
      <NavBar
        churchName={siteContent.churchName}
        eventName={siteContent.eventName}
        navigation={siteContent.navigation}
      />
      <PageIntro {...siteContent.pageIntros.activities} />

      <Section
        eyebrow="Activity Lineup"
        title="Festival fun with room for everyone"
        description="The activity page is designed to feel more energetic while keeping the schedule and offerings easy to scan."
      >
        <CardGrid
          items={siteContent.activities.map((item) => ({
            title: item,
            body: "Part of the growing Summer Fest lineup.",
          }))}
        />
      </Section>

      <Section
        eyebrow="Looking Ahead"
        title="The lineup is still growing"
        description={siteContent.activitiesNote}
      >
        <CardGrid items={siteContent.activitiesHighlights} />
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
