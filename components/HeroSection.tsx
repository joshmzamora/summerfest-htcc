import Link from "next/link";

import { Countdown } from "@/components/Countdown";
import { Action } from "@/components/types";

type HeroSectionProps = {
  title: string;
  date: string;
  time: string;
  tagline: string;
  note?: string;
  actions: readonly Action[];
  countdownTarget: string;
};

const renderAction = (action: Action) => {
  const className = `button button-${action.variant ?? "primary"}`;

  if (action.external) {
    return (
      <a key={action.label} className={className} href={action.href} target="_blank" rel="noreferrer">
        {action.label}
      </a>
    );
  }

  return (
    <Link key={action.label} className={className} href={action.href}>
      {action.label}
    </Link>
  );
};

export function HeroSection({
  title,
  date,
  time,
  tagline,
  note,
  actions,
  countdownTarget,
}: HeroSectionProps) {
  return (
    <section className="hero-section section festival-layer" id="top">
      <div className="container hero-layout">
        <div className="hero-copy">
          <h1>{title}</h1>
          <p className="hero-meta">
            <strong>{date}</strong>
            <span>{time}</span>
          </p>
          <p className="hero-tagline">{tagline}</p>
          {note ? <p className="hero-note">{note}</p> : null}
          <div className="button-row hero-actions">{actions.map(renderAction)}</div>
        </div>
        <div className="hero-aside">
          <div className="festival-scene" aria-hidden="true">
            <div className="scene-bunting scene-bunting-top">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="scene-bunting">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="scene-lights" />
            <div className="scene-sun" />
            <div className="scene-crowd">
              <span />
              <span />
              <span />
            </div>
            <div className="scene-tents">
              <span />
              <span />
              <span />
            </div>
            <div className="scene-ground" />
          </div>
          <Countdown target={countdownTarget} />
        </div>
      </div>
    </section>
  );
}
