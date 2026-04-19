"use client";

import {
  MotionPanel,
  MotionPressableLink,
  MotionStagger,
  m,
  useReducedMotion,
} from "@/components/FestivalMotion";

type BasketTheme = {
  name: string;
  items: ReadonlyArray<string>;
};

type BasketThemeGroup = {
  title: string;
  themes: ReadonlyArray<BasketTheme>;
};

type BasketThemeSection = {
  title: string;
  intro: string;
  groups: ReadonlyArray<BasketThemeGroup>;
};

type SignUpCardItem = {
  title: string;
  description: string;
  buttonLabel: string;
  formUrl: string;
  details: ReadonlyArray<string>;
  basketThemeSection?: BasketThemeSection;
};

type SignUpCardsProps = {
  items: ReadonlyArray<SignUpCardItem>;
};

function BasketThemeAccordion({
  section,
  cardTitle,
}: {
  section: BasketThemeSection;
  cardTitle: string;
}) {
  const cardSlug = cardTitle.toLowerCase().replace(/\s+/g, "-");

  return (
    <section className="basket-theme-section" aria-label={section.title}>
      <div className="basket-theme-copy">
        <h4>{section.title}</h4>
        <p>{section.intro}</p>
      </div>
      <div className="basket-theme-groups">
        {section.groups.map((group, index) => {
          const toggleId = `${cardSlug}-basket-toggle-${index}`;
          const themeCountLabel = `${group.themes.length} ${group.themes.length === 1 ? "theme" : "themes"}`;

          return (
            <div className="basket-theme-group" key={group.title}>
              <input
                className="basket-theme-toggle"
                defaultChecked={index === 0}
                id={toggleId}
                name={`${cardSlug}-basket-group`}
                type="radio"
              />
              <label
                className="basket-theme-trigger"
                htmlFor={toggleId}
              >
                <span className="basket-theme-trigger-copy">
                  <strong>{group.title}</strong>
                  <small>{themeCountLabel}</small>
                </span>
                <span aria-hidden="true" className="basket-theme-indicator">
                  +
                </span>
              </label>
              <div className="basket-theme-panel">
                <div className="basket-theme-list">
                  {group.themes.map((theme) => (
                    <article className="basket-theme-item" key={theme.name}>
                      <h5>{theme.name}</h5>
                      <p>{theme.items.join(", ")}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function SignUpCards({ items }: SignUpCardsProps) {
  const reduceMotion = useReducedMotion();

  return (
    <MotionStagger className="sign-up-grid" stagger={0.12}>
      {items.map((item) => {
        const hasLink = Boolean(item.formUrl);

        return (
          <MotionPanel
            as="article"
            className="sign-up-card"
            hover={item.basketThemeSection ? "none" : "card"}
            key={item.title}
            reveal="card"
          >
            <div className="sign-up-copy">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <ul className="detail-list">
              {item.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
            <div className="button-row">
              {hasLink && (
                <MotionPressableLink className="button button-primary" external fillWidth href={item.formUrl}>
                  <m.span
                    animate={reduceMotion ? undefined : { y: [0, -1.5, 0] }}
                    className="button-label"
                    transition={{ duration: 4.8, repeat: Infinity, repeatDelay: 1.8 }}
                  >
                    {item.buttonLabel}
                  </m.span>
                </MotionPressableLink>
              )}
            </div>
            {item.basketThemeSection ? (
              <BasketThemeAccordion cardTitle={item.title} section={item.basketThemeSection} />
            ) : null}
          </MotionPanel>
        );
      })}
    </MotionStagger>
  );
}
