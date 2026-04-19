"use client";

import { MotionPanel, MotionPressableLink, MotionStagger, m, useReducedMotion } from "@/components/FestivalMotion";
import { Action } from "@/components/types";

type CardGridProps = {
  items: ReadonlyArray<{
    title: string;
    body?: string;
    note?: string;
    actions?: readonly Action[];
  }>;
  className?: string;
};

export function CardGrid({ items, className }: CardGridProps) {
  const reduceMotion = useReducedMotion();

  return (
    <MotionStagger className={`card-grid ${className ?? ""}`.trim()} stagger={0.12}>
      {items.map((item) => (
        <MotionPanel as="article" className="content-card" hover="card" key={item.title} reveal="card">
          <h3>{item.title}</h3>
          {item.body ? <p>{item.body}</p> : null}
          {item.note ? <p className="card-note">{item.note}</p> : null}
          {item.actions?.length ? (
            <div className="button-row">
              {item.actions.map((action) => (
                <MotionPressableLink
                  key={action.label}
                  className={`button button-${action.variant ?? "primary"}`}
                  external={action.external}
                  href={action.href}
                >
                  <m.span
                    animate={reduceMotion ? undefined : { y: [0, -1.5, 0] }}
                    className="button-label"
                    transition={{ duration: 4.8, repeat: Infinity, repeatDelay: 2.4 }}
                  >
                    {action.label}
                  </m.span>
                </MotionPressableLink>
              ))}
            </div>
          ) : null}
        </MotionPanel>
      ))}
    </MotionStagger>
  );
}
