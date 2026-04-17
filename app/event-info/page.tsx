import { CardGrid } from "@/components/Cards";
import { FaqList } from "@/components/FaqList";
import { InfoBar } from "@/components/InfoBar";
import { NavBar } from "@/components/NavBar";
import { PageIntro } from "@/components/PageIntro";
import { Section } from "@/components/Section";
import { SiteFooter } from "@/components/SiteFooter";
import { siteContent } from "@/data/site-content";

export default function EventInfoPage() {
  return (
    <main>
      <NavBar
        churchName={siteContent.churchName}
        eventName={siteContent.eventName}
        navigation={siteContent.navigation}
      />
      <PageIntro
        title="Everything you need to know before festival day"
        description="Event Info brings the essential details together in one easy path: quick event details, about the day, food, activities, and frequently asked questions."
      />
      <InfoBar items={siteContent.quickInfo} />

      <Section
        title="About Summer Fest"
        description="Holy Trinity Summer Fest is designed to feel welcoming, community-centered, and easy to enjoy for parish families, neighbors, and new visitors."
      >
        <div className="split-layout">
          <article className="highlight-panel">
            <h3>{siteContent.admission.title}</h3>
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
              body: "Final details will be shared here as plans for the day are confirmed.",
            }))}
          />
        </div>
      </Section>

      <Section
        title="Food & drink"
        description="Festival favorites, treats, and refreshing drinks will all be listed here as the menu is finalized."
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
        <p className="section-note">{siteContent.foodNote}</p>
      </Section>

      <Section
        title="Activities & games"
        description="This part of the event is built for all ages, with room for friendly competition, family fun, and more details to come."
      >
        <CardGrid
          items={siteContent.activities.map((item) => ({
            title: item,
            body: "Part of the growing Summer Fest lineup.",
          }))}
        />
        <p className="section-note">{siteContent.activitiesNote}</p>
      </Section>

      <Section
        title="Frequently asked questions"
        description="These answers cover the most common questions about attendance, seating, parking, pets, and getting involved."
      >
        <FaqList items={siteContent.faqs} />
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
