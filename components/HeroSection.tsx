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
          <div className="hero-pennants" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <p className="hero-kicker">
            <span>Parish Festival</span>
            <span>Open to the Community</span>
          </p>
          <h1>{title}</h1>
          <p className="hero-meta">
            <strong>{date}</strong>
            <span>{time}</span>
          </p>
          <p className="hero-tagline">{tagline}</p>
          {note ? <p className="hero-note">{note}</p> : null}
          <ul className="hero-highlight-list" aria-label="Festival highlights">
            <li>Free Admission</li>
            <li>Building Fund Benefit</li>
            <li>Food, Games, Auction</li>
            <li>Family-Friendly Day</li>
          </ul>
          <div className="button-row hero-actions">{actions.map(renderAction)}</div>
        </div>
        <div className="hero-aside">
          <div className="festival-scene" aria-label="Festival poster panel">
            <p className="poster-chip">May 31, 2026</p>
            <h2>Festival Grounds</h2>
            <ul className="poster-list">
              <li>
                <span>Food Booths</span>
                <strong>Brisket, turkey legs, funnel cakes</strong>
              </li>
              <li>
                <span>Game Tents</span>
                <strong>Family games and prize stations</strong>
              </li>
              <li>
                <span>Tournaments</span>
                <strong>Volleyball and washers sign-up</strong>
              </li>
              <li>
                <span>Silent Auction</span>
                <strong>Gift baskets and community bids</strong>
              </li>
            </ul>
            <p className="poster-ticket">Hosted by Holy Trinity Catholic Church</p>
          </div>
          <Countdown target={countdownTarget} />
        </div>
      </div>
    </section>
  );
}
