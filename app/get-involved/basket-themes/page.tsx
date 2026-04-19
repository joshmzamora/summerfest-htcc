"use client";

import React from "react";
import Link from "next/link";

import { NavBar } from "@/components/NavBar";
import { SiteFooter } from "@/components/SiteFooter";
import { MotionPanel, MotionPressableLink, MotionStagger, eases, m, useReducedMotion } from "@/components/FestivalMotion";
import { siteContent } from "@/data/site-content";

const themeDescriptions: Record<string, string> = {
  "Tequila": "The ultimate fiesta starter with everything needed for craft margaritas.",
  "Movie Night": "A complete cinema experience for the whole family, from popcorn to streaming.",
  "Coffee": "Start the morning right with premium beans and cafe-quality accessories.",
  "Hot Cocoa": "A cozy collection for chilly evenings with gourmet chocolate and sweet toppings.",
  "Pizza": "Everything but the dough for a high-end Italian pizza night at home.",
  "Breakfast": "Gourmet mixes and local syrups for a Sunday morning family tradition.",
  "Italian Dinner": "A taste of Italy with artisanal pasta, fine oil, and red wine.",
  "Date Night": "A romantic evening planned for you, featuring dinner, candles, and treats.",
  "Southern Comfort": "Classic hospitality with local honey and southern-style mixes.",
  "Buc-ee's": "The ultimate Texas road trip stash from everyone's favorite beaver.",
  "Tailgate": "Be the MVP of the parking lot with these game-day essentials.",
  "Crawfish": "Everything needed for a classic backyard seafood boil.",
  "Brunch": "Elevate your weekend with mimosa glasses and muffin mixes.",
  "Charcuterie": "Craft the perfect spread with artisanal boards and accessories.",
  "Picnic": "A complete set for an afternoon in the park with friends.",
  "S'mores": "The classic campfire tradition with a gourmet chocolate twist.",
  "Sweet Tooth": "A curated collection for the candy lover in your life.",
  "Hosting": "Impress your guests with elegant serving tools and wine essentials.",
  "Healthy Habits": "Fuel your fitness goals with protein snacks and workout gear.",
  "Sourdough": "The complete starter kit for your artisanal bread-making journey.",
  "Grill": "Everything the pitmaster needs for the perfect backyard BBQ.",
  "Baking Basket": "Sweeten any afternoon with professional tools and fun toppings.",
  "Gardening": "Everything needed to grow your own herbs and beautiful flowers.",
  "Lemons": "Brighten any kitchen with citrus-themed decor and sweet treats.",
  "Deep Cleaning": "The ultimate stash of high-end tools to make any home sparkle.",
  "Kitchen Essentials": "Upgrade your culinary space with high-quality daily tools.",
  "New Homeowner": "The perfect welcome gift with tools and essentials for a new space.",
  "Whiskey": "A sophisticated collection for the connoisseur of fine spirits.",
  "Spa / Self Care": "Transform your bathroom into a luxury retreat with these soothing treats.",
  "Middle Age Starter Pack": "Practical comfort for the 'vintage' years, from ice packs to antacids.",
  "Beard Care": "Grooming essentials to keep any beard looking and feeling its best.",
  "Mom's Night In": "A relaxing evening designed specifically to pamper hard-working moms.",
  "Dad's Favorites": "A curated stash of rugged gear and snacks any dad would love.",
  "Book Lover": "Everything needed for a cozy afternoon lost in a great novel.",
  "Rainy Day": "Turn a gray afternoon into fun with puzzles, hot tea, and games.",
  "Crocs": "Style and comfort for the fan of the world's most versatile footwear.",
  "Family Game Night": "Bring everyone to the table for an evening of friendly competition.",
  "Kids Summer Fun": "Be the hero of the backyard with water toys and outdoor games.",
  "Pet Lover": "Special treats and toys for the four-legged family members.",
  "Kids Activities": "Creative tools to keep small hands and big imaginations busy.",
  "Crafts": "A complete makerspace in a box for your next creative project.",
  "Baby": "Soft essentials and sweet toys for the newest addition to the family.",
  "Texas": "Deeply local pride with iconic Texas-shaped treats and decor.",
  "Beach": "Everything needed for a sun-soaked afternoon on the sand.",
  "Astros": "Show your H-Town pride with gear for the World Series champions.",
  "Barbers Hill": "Support the home team with local blue and white spirit gear.",
  "Pool Day": "Inflatables and accessories for the perfect summer afternoon.",
  "Fishing": "Practical gear and snacks for a successful day on the water.",
  "College-Specific": "Tailgate-ready gear for your favorite university fan.",
  "Teacher Appreciation": "Give back to our educators with classroom tools and self-care.",
  "Catholic": "A beautiful collection of devotionals, rosaries, and parish-focused items.",
  "Faith": "Spiritual essentials for quiet reflection and daily prayer.",
  "USA": "Patriotic decor and snacks for your next holiday celebration.",
  "Christmas": "Celebrate the season with festive decor and holiday treats.",
  "Easter": "Everything needed for a joyful and sweet spring celebration.",
  "Fall": "Warm up the season with autumn scents and pumpkin-spiced treats.",
};

const getThemeDescription = (name: string) => {
  return themeDescriptions[name] || "A carefully curated gift basket perfect for our silent auction.";
};

export default function BasketThemesPage() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [isCategoryCondensed, setIsCategoryCondensed] = React.useState(false);
  const reduceMotion = useReducedMotion();
  const section = siteContent.signUps[1].basketThemeSection!;

  const categories = ["All", ...section.groups.map((group) => group.title)];

  const filteredGroups = section.groups
    .filter((group) => activeCategory === "All" || group.title === activeCategory)
    .map((group) => ({
      ...group,
      themes: group.themes.filter((theme) => {
        const normalizedQuery = searchQuery.toLowerCase();

        return (
          theme.name.toLowerCase().includes(normalizedQuery) ||
          theme.items.some((item) => item.toLowerCase().includes(normalizedQuery))
        );
      }),
    }))
    .filter((group) => group.themes.length > 0);

  React.useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const sentinel = document.querySelector<HTMLDivElement>(".basket-controls-sentinel");

    if (!sentinel) {
      return;
    }

    const mobileQuery = window.matchMedia("(max-width: 640px)");
    let frameId = 0;

    const syncCondensedState = () => {
      cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(() => {
        if (!mobileQuery.matches) {
          setIsCategoryCondensed(false);
          return;
        }

        setIsCategoryCondensed(sentinel.getBoundingClientRect().top <= 60);
      });
    };

    syncCondensedState();
    window.addEventListener("scroll", syncCondensedState, { passive: true });
    window.addEventListener("resize", syncCondensedState);
    mobileQuery.addEventListener("change", syncCondensedState);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", syncCondensedState);
      window.removeEventListener("resize", syncCondensedState);
      mobileQuery.removeEventListener("change", syncCondensedState);
    };
  }, []);

  return (
    <main className="get-involved-page basket-themes-page">
      <NavBar
        churchName={siteContent.churchName}
        eventName={siteContent.eventName}
        navigation={siteContent.navigation}
      />

      <div className="page-intro-mini">
        <div className="container">
          <Link href="/get-involved" className="back-link">
            {"<- Back to Get Involved"}
          </Link>
          <div className="basket-page-header">
            <h1>{section.title}</h1>
            <p className="basket-page-intro">{section.intro}</p>
          </div>
        </div>
      </div>

      <section className="section basket-main-section" id="themes">
        <div className="container">
          <div className="basket-controls-sentinel" aria-hidden="true" />

          <div
            className={`basket-controls ${isCategoryCondensed ? "is-condensed" : ""}`.trim()}
            data-condensed={isCategoryCondensed ? "true" : "false"}
          >
            <div className="basket-search-container">
              <div className="basket-search-wrapper">
                <div className="search-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder={isCategoryCondensed ? "Search themes..." : "Search 50+ themes (e.g. 'Coffee', 'Tequila')..."}
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  className="basket-search-input"
                />
                {searchQuery ? (
                  <button className="basket-search-clear" onClick={() => setSearchQuery("")} type="button" aria-label="Clear search">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                ) : null}
              </div>

              {!isCategoryCondensed && (
                <div className="basket-results-meta">
                  <span className="results-label">
                    {searchQuery || activeCategory !== "All" ? "Filtered Results" : "All Auction Themes"}
                  </span>
                  <span className="results-count">
                    {filteredGroups.reduce((acc, g) => acc + g.themes.length, 0)} Options
                  </span>
                </div>
              )}
            </div>

            <div className="basket-category-filter">
              <m.div
                className="filter-scroll"
                layout={!reduceMotion}
                transition={reduceMotion ? undefined : { duration: 0.32, ease: eases.settle }}
              >
                {categories.map((category) => (
                  <m.button
                    key={category}
                    type="button"
                    layout={!reduceMotion}
                    className={`filter-pill ${activeCategory === category ? "is-active" : ""}`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </m.button>
                ))}
              </m.div>
            </div>
          </div>

          <MotionStagger className="basket-full-grid" stagger={0.05}>
            {filteredGroups.map((group) => (
              <div className="basket-category-block" key={group.title}>
                <h3 className="category-title">
                  {group.title}
                  <small>{group.themes.length} Options</small>
                </h3>
                <div className="basket-theme-grid">
                  {group.themes.map((theme) => (
                    <MotionPanel
                      as="article"
                      className="basket-theme-card"
                      key={theme.name}
                      hover="card"
                      reveal="card"
                    >
                      <div className="basket-card-content">
                        <h5>{theme.name}</h5>
                        <p className="theme-description">{getThemeDescription(theme.name)}</p>
                        <div className="basket-item-tags">
                          {theme.items.map((item, index) => (
                            <span key={index} className="basket-item-tag">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="basket-card-action">
                        <MotionPressableLink
                          className="button button-secondary-sm"
                          external
                          href={`${siteContent.signUps[1].formUrl}&entry.theme=${encodeURIComponent(theme.name)}`}
                        >
                          <span className="button-label">Donate {theme.name} Theme</span>
                        </MotionPressableLink>
                      </div>
                    </MotionPanel>
                  ))}
                </div>
              </div>
            ))}
          </MotionStagger>

          {(searchQuery || activeCategory !== "All") && filteredGroups.length === 0 ? (
            <m.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="basket-no-results large"
            >
              <div className="no-results-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 11H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>No themes found</h3>
              <p>We couldn't find any themes matching "{searchQuery}". Try a different term or browse categories.</p>
              <button
                className="button button-ghost"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                type="button"
              >
                Clear all filters
              </button>
            </m.div>
          ) : null}
        </div>
      </section>

      <section className="section cta-ribbon">
        <MotionPanel className="container cta-ribbon-shell" hover="panel" reveal="ribbon">
          <div>
            <h2>Ready to donate your basket?</h2>
            <p>Submit your theme selection through our donation form.</p>
          </div>
          <div className="button-row">
            <MotionPressableLink
              className="button button-primary"
              external
              href={siteContent.signUps[1].formUrl}
            >
              <span className="button-label">Open Donation Form</span>
            </MotionPressableLink>
          </div>
        </MotionPanel>
      </section>

      <SiteFooter
        churchName={siteContent.churchName}
        eventName={siteContent.eventName}
        footerLinks={siteContent.footerLinks}
        socialLinks={siteContent.socialLinks}
      />
    </main>
  );
}
