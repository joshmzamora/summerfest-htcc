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
  calendarHref: string;
  calendarLabel: string;
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
  calendarHref,
  calendarLabel,
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
          <div className="button-row hero-actions">{actions.map(renderAction)}</div>
        </div>
        <div className="hero-aside">
          <div className="festival-scene" aria-label="Festival poster panel">
            <div className="poster-head">
              <div className="poster-stickers" aria-label="Festival highlights">
                <span className="poster-sticker poster-sticker-top">Food, Games, Auction</span>
                <span className="poster-sticker poster-sticker-family">Family Friendly</span>
              </div>
              <p className="poster-burst">Free Admission</p>
            </div>
            <h2>Festival Grounds</h2>
            <p className="poster-benefit">Support Our New Building</p>
            <ul className="poster-list">
              <li className="poster-item poster-food">
                <span>Food Booths</span>
                <strong>Brisket, turkey legs, funnel cakes</strong>
              </li>
              <li className="poster-item poster-games">
                <span>Game Tents</span>
                <strong>Family games and prize stations</strong>
              </li>
              <li className="poster-item poster-tournament">
                <span>Tournaments</span>
                <strong>Volleyball and washers sign-up</strong>
              </li>
              <li className="poster-item poster-auction">
                <span>Silent Auction</span>
                <strong>Gift baskets and community bids</strong>
              </li>
            </ul>
            <p className="poster-ticket">Hosted by Holy Trinity Catholic Church</p>
          </div>
          <Countdown target={countdownTarget} />
          <a
            className="button button-primary hero-calendar-button"
            href={calendarHref}
            download
            aria-label={`${calendarLabel} for ${title}`}
          >
            {calendarLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
