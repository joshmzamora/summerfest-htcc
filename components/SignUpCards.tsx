"use client";

import { MotionPanel, MotionPressableLink, MotionStagger, m, useReducedMotion } from "@/components/FestivalMotion";

type SignUpCardsProps = {
  items: ReadonlyArray<{
    title: string;
    description: string;
    buttonLabel: string;
    formUrl: string;
    details: ReadonlyArray<string>;
  }>;
};

export function SignUpCards({ items }: SignUpCardsProps) {
  const reduceMotion = useReducedMotion();

  return (
    <MotionStagger className="sign-up-grid" stagger={0.12}>
      {items.map((item) => {
        const hasLink = Boolean(item.formUrl);

        return (
          <MotionPanel as="article" className="sign-up-card" hover="card" key={item.title} reveal="card">
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
          </MotionPanel>
        );
      })}
    </MotionStagger>
  );
}
