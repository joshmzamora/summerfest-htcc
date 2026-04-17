import { CardGrid } from "@/components/Cards";
import { NavBar } from "@/components/NavBar";
import { PageIntro } from "@/components/PageIntro";
import { Section } from "@/components/Section";
import { SiteFooter } from "@/components/SiteFooter";
import { siteContent } from "@/data/site-content";

export default function FoodDrinkPage() {
  return (
    <main>
      <NavBar
        churchName={siteContent.churchName}
        eventName={siteContent.eventName}
        navigation={siteContent.navigation}
      />
      <PageIntro {...siteContent.pageIntros.food} />

      <Section
        title="A lineup of festival favorites"
        description="This page keeps food and drink details in one place so the menu can be expanded easily as plans are finalized."
      >
        <CardGrid
          items={siteContent.foodAndDrink.map((item) => ({
            title: item,
            body:
              item === "Margaritas" || item === "Beer"
                ? "Served in a tasteful, responsible festival setting for adult guests."
                : "Planned menu item for the day's food and refreshment lineup.",
          }))}
        />
      </Section>

      <Section
        title="Menu notes and updates"
        description={siteContent.foodNote}
      >
        <CardGrid items={siteContent.foodHighlights} />
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
