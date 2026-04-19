"use client";

import { ReactNode } from "react";

import { MotionPanel, MotionStagger, m } from "@/components/FestivalMotion";

type SectionProps = {
  id?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  headingMotion?: "poster" | "ribbon" | "signboard";
  centered?: boolean;
  carnival?: boolean;
};

export function Section({
  id,
  title,
  description,
  children,
  className,
  headingMotion = "signboard",
  centered = false,
  carnival = false,
}: SectionProps) {
  const TitleTag = carnival ? "div" : MotionStagger;

  return (
    <section className={`section ${className ?? ""}`.trim()} id={id}>
      <div className="container">
        <MotionPanel 
          as="header" 
          className={`section-heading ${centered || carnival ? "is-centered" : ""}`.trim()} 
          reveal={headingMotion}
        >
          <MotionStagger className="section-heading-inner" stagger={0.08}>
            {carnival ? (
              <div className="carnival-banner">
                <m.h2 variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}>
                  {title}
                </m.h2>
              </div>
            ) : (
              <m.h2 variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}>
                {title}
              </m.h2>
            )}
            
            {description ? (
              <m.p variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}>
                {description}
              </m.p>
            ) : null}
          </MotionStagger>
        </MotionPanel>
        {children}
      </div>
    </section>
  );
}
