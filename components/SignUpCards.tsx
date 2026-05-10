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
  details: ReadonlyArray<string | { label: string; href: string; external?: boolean }>;
  basketThemeSection?: BasketThemeSection;
};

type SignUpCardsProps = {
  items: ReadonlyArray<SignUpCardItem>;
};

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
            hover="card"
            key={item.title}
            reveal="card"
          >
            <div className="sign-up-copy">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <ul className="detail-list">
              {item.details.map((detail) => (
                <li key={typeof detail === "string" ? detail : detail.label}>
                  {typeof detail === "string" ? (
                    detail
                  ) : (
                    <a href={detail.href} rel={detail.external ? "noreferrer" : undefined} target={detail.external ? "_blank" : undefined}>
                      {detail.label}
                    </a>
                  )}
                </li>
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
          </MotionPanel>
        );
      })}
    </MotionStagger>
  );
}
