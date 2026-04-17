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
        description="Find the essentials for festival day, including event details, food, activities, and frequently asked questions."
      />
      <InfoBar items={siteContent.quickInfo} />

      <Section
        title="About Summer Fest"
        description="Holy Trinity Summer Fest is a welcoming community celebration with food, fellowship, and family fun for all ages."
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
              body: "More details will be posted here as plans for the day are finalized.",
            }))}
          />
        </div>
      </Section>

      <Section
        title="Food & drink"
        description="Festival favorites, sweet treats, and refreshing drinks will be listed here as the menu comes together."
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
        description="This part of the celebration is planned for all ages, with friendly competition, family fun, and more to enjoy."
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
        socialLinks={siteContent.socialLinks}
      />
    </main>
  );
}
