"use client";

import {
  MotionPanel,
  MotionPressableLink,
  MotionStagger,
  eases,
  m,
  useReducedMotion,
} from "@/components/FestivalMotion";
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

const renderAction = (action: Action, reduceMotion: boolean | null) => {
  const className = `button button-${action.variant ?? "primary"}`;

  return (
    <MotionPressableLink
      key={action.label}
      className={className}
      external={action.external}
      fillWidth
      href={action.href}
    >
      <m.span
        animate={reduceMotion ? undefined : { y: [0, -1.5, 0] }}
        className="button-label"
        transition={{ duration: 5.2, ease: eases.settle, repeat: Infinity, repeatDelay: 2.4 }}
      >
        {action.label}
      </m.span>
    </MotionPressableLink>
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
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero-section section festival-layer" id="top">
      <div className="container hero-layout">
        <MotionPanel className="hero-copy" reveal="poster">
          <div className="hero-pennants" aria-hidden="true">
            {Array.from({ length: 7 }).map((_, index) => (
              <m.span
                key={index}
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        rotate: index % 2 === 0 ? [-2, 2, -2] : [2, -2, 2],
                        y: [0, 2, 0],
                      }
                }
                transition={{
                  duration: 3.8 + index * 0.22,
                  ease: eases.settle,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              />
            ))}
          </div>
          <MotionStagger className="hero-copy-stack" stagger={0.11}>
            <m.p className="hero-kicker" variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}>
              <m.span variants={{ hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0 } }}>
                Parish Festival
              </m.span>
              <m.span variants={{ hidden: { opacity: 0, x: 12 }, visible: { opacity: 1, x: 0 } }}>
                Open to the Community
              </m.span>
            </m.p>
            <m.h1 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>{title}</m.h1>
            <m.p className="hero-meta" variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}>
              <strong>{date}</strong>
              <span>{time}</span>
            </m.p>
            <m.p
              className="hero-tagline"
              variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
            >
              {tagline}
            </m.p>
            {note ? (
              <m.p className="hero-note" variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}>
                {note}
              </m.p>
            ) : null}
            <MotionStagger className="button-row hero-actions" stagger={0.09}>
              {actions.map((action) => (
                <m.div key={action.label} variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}>
                  {renderAction(action, reduceMotion)}
                </m.div>
              ))}
            </MotionStagger>
          </MotionStagger>
        </MotionPanel>
        <div className="hero-aside">
          <MotionPanel as="aside" className="festival-scene" hover="panel" reveal="signboard">
            <div className="poster-head">
              <div className="poster-stickers" aria-label="Festival highlights">
                <m.span
                  animate={reduceMotion ? undefined : { rotate: [-2, 1, -2], y: [0, -2, 0] }}
                  className="poster-sticker poster-sticker-top"
                  transition={{ duration: 4.4, ease: eases.settle, repeat: Infinity }}
                >
                  Food, Games, Auction
                </m.span>
                <m.span
                  animate={reduceMotion ? undefined : { rotate: [-10, -8, -10], scale: [1, 1.03, 1] }}
                  className="poster-sticker poster-sticker-family"
                  transition={{ duration: 5.6, ease: eases.quick, repeat: Infinity }}
                >
                  Family Friendly
                </m.span>
              </div>
              <m.p
                animate={reduceMotion ? undefined : { scale: [1, 1.045, 1], rotate: [-4, -2, -4] }}
                className="poster-burst"
                transition={{ duration: 3.8, ease: eases.quick, repeat: Infinity }}
              >
                Free Admission
              </m.p>
            </div>
            <m.h2 initial={reduceMotion ? false : { opacity: 0, y: 16 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.48, ease: eases.settle }}>
              Festival Grounds
            </m.h2>
            <m.p
              animate={reduceMotion ? undefined : { rotate: [7, 5, 7], y: [0, -2, 0] }}
              className="poster-benefit"
              transition={{ duration: 6, ease: eases.settle, repeat: Infinity }}
            >
              Support Our New Building
            </m.p>
            <MotionStagger className="poster-list" delayChildren={0.16} stagger={0.08}>
              <MotionPanel as="li" className="poster-item poster-food" hover="card">
                <span>Food Booths</span>
                <strong>Brisket, turkey legs, funnel cakes</strong>
              </MotionPanel>
              <MotionPanel as="li" className="poster-item poster-games" hover="card">
                <span>Game Tents</span>
                <strong>Family games and prize stations</strong>
              </MotionPanel>
              <MotionPanel as="li" className="poster-item poster-tournament" hover="card">
                <span>Tournaments</span>
                <strong>Volleyball and washers sign-up</strong>
              </MotionPanel>
              <MotionPanel as="li" className="poster-item poster-auction" hover="card">
                <span>Silent Auction</span>
                <strong>Gift baskets and community bids</strong>
              </MotionPanel>
            </MotionStagger>
            <m.p
              animate={reduceMotion ? undefined : { y: [0, -2, 0], rotate: [-1.5, 0.5, -1.5] }}
              className="poster-ticket"
              transition={{ duration: 7.2, ease: eases.settle, repeat: Infinity }}
            >
              Hosted by Holy Trinity Catholic Church
            </m.p>
          </MotionPanel>
          <Countdown target={countdownTarget} />
          <MotionPressableLink
            className="button button-primary hero-calendar-button"
            download
            fillWidth
            href={calendarHref}
            aria-label={`${calendarLabel} for ${title}`}
          >
            <m.span
              animate={reduceMotion ? undefined : { y: [0, -1.5, 0] }}
              className="button-label"
              transition={{ duration: 4.6, ease: eases.settle, repeat: Infinity, repeatDelay: 2.2 }}
            >
              {calendarLabel}
            </m.span>
          </MotionPressableLink>
        </div>
      </div>
    </section>
  );
}
