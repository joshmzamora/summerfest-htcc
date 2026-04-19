"use client";

import { MotionPanel, MotionStagger, eases, m, useReducedMotion } from "@/components/FestivalMotion";

type PageIntroProps = {
  title: string;
  description?: string;
  variant?: "default" | "text-first";
};

export function PageIntro({ title, description, variant = "default" }: PageIntroProps) {
  const reduceMotion = useReducedMotion();
  const showArt = variant !== "text-first";

  return (
    <section className={`page-intro section festival-layer${showArt ? "" : " page-intro-text-first"}`}>
      <div className="container page-intro-shell">
        <MotionPanel className="page-intro-copy" reveal="poster">
          <MotionStagger className="page-intro-copy-inner" stagger={0.1}>
            <m.h1 variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }}>
              {title}
            </m.h1>
            {description ? (
              <m.p variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}>
                {description}
              </m.p>
            ) : null}
          </MotionStagger>
        </MotionPanel>
        {showArt ? (
          <MotionPanel
            className="page-intro-art"
            reveal="signboard"
            hover="panel"
            aria-hidden
          >
            <m.div
              animate={
                reduceMotion
                  ? undefined
                  : { rotate: [-2, 1.5, -1.25, -2], y: [0, -3, 2, 0] }
              }
              className="art-ticket"
              transition={{ duration: 8, ease: eases.settle, repeat: Infinity }}
            >
              Summer Fest
            </m.div>
            <m.div
              animate={reduceMotion ? undefined : { rotate: [0, 10, 0], scale: [1, 1.03, 1] }}
              className="art-swirl art-swirl-one"
              transition={{ duration: 7.5, ease: eases.settle, repeat: Infinity }}
            />
            <m.div
              animate={reduceMotion ? undefined : { rotate: [0, -12, 0], scale: [1, 0.98, 1] }}
              className="art-swirl art-swirl-two"
              transition={{ duration: 9.5, ease: eases.settle, repeat: Infinity }}
            />
            <m.div
              animate={reduceMotion ? undefined : { scale: [1, 1.08, 1], rotate: [0, 6, 0] }}
              className="art-star"
              transition={{ duration: 5.6, ease: eases.quick, repeat: Infinity }}
            />
          </MotionPanel>
        ) : null}
      </div>
    </section>
  );
}
