import { NavBar } from "@/components/NavBar";
import { PageIntro } from "@/components/PageIntro";
import { Section } from "@/components/Section";
import { SilentAuctionClient } from "@/components/SilentAuctionClient";
import { SiteFooter } from "@/components/SiteFooter";
import { siteContent } from "@/data/site-content";
import { getActiveAuctionItems } from "@/lib/auction/data";

export const dynamic = "force-dynamic";

export default async function SilentAuctionPage() {
  const auctionItems = await getActiveAuctionItems();

  return (
    <main className="silent-auction-page">
      <NavBar
        churchName={siteContent.churchName}
        eventName={siteContent.eventName}
        navigation={siteContent.navigation}
      />
      <PageIntro
        title={siteContent.silentAuction.intro.title}
        description={siteContent.silentAuction.intro.description}
        variant="text-first"
      />

      <Section
        className="silent-auction-section"
        headingMotion="poster"
        title={siteContent.silentAuction.itemsTitle}
        carnival
      >
        <SilentAuctionClient
          initialItems={auctionItems.items}
          isConfigured={auctionItems.isConfigured}
          loadError={auctionItems.loadError}
        />
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
