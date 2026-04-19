"use client";

import React from "react";
import { NavBar } from "@/components/NavBar";
import { SiteFooter } from "@/components/SiteFooter";
import { Section } from "@/components/Section";
import { siteContent } from "@/data/site-content";
import { MotionPanel, MotionPressableLink, MotionStagger } from "@/components/FestivalMotion";
import Link from "next/link";

export default function BasketThemesPage() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const section = siteContent.signUps[1].basketThemeSection!;
  const [activeCategory, setActiveCategory] = React.useState<string>("All");

  const categories = ["All", ...section.groups.map(g => g.title)];

  const filteredGroups = section.groups
    .filter(group => activeCategory === "All" || group.title === activeCategory)
    .map(group => ({
      ...group,
      themes: group.themes.filter(theme => 
        theme.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        theme.items.some(item => item.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }))
    .filter(group => group.themes.length > 0);

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
            ← Back to Get Involved
          </Link>
          <div className="basket-page-header">
            <h1>{section.title}</h1>
            <p className="basket-page-intro">{section.intro}</p>
          </div>
        </div>
      </div>

      <Section id="themes" className="basket-main-section" carnival headingMotion="none">
        <div className="basket-controls">
          <div className="basket-search-wrapper large">
            <input
              type="text"
              placeholder="Search 50+ themes (e.g. 'Coffee', 'Tequila', 'Kids')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="basket-search-input"
            />
            {searchQuery && (
              <button className="basket-search-clear" onClick={() => setSearchQuery("")}>
                ×
              </button>
            )}
          </div>

          <div className="basket-category-filter">
            <div className="filter-scroll">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`filter-pill ${activeCategory === cat ? "is-active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
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
                      <p className="theme-description">
                        Perfect for the silent auction. Items include: {theme.items.slice(0, 3).join(", ")}...
                      </p>
                      <div className="basket-item-tags">
                        {theme.items.map((item, idx) => (
                          <span key={idx} className="basket-item-tag">{item}</span>
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

        {(searchQuery || activeCategory !== "All") && filteredGroups.length === 0 && (
          <div className="basket-no-results large">
            <p>No themes found matching your criteria.</p>
            <button className="button button-ghost" onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}>
              Reset Filters
            </button>
          </div>
        )}
      </Section>

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
