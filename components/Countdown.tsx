"use client";

import { useEffect, useState } from "react";

import { MotionPanel, MotionStagger, eases, m, useReducedMotion } from "@/components/FestivalMotion";

type CountdownProps = {
  target: string;
};

type CountdownState = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
};

const initialCountdownState: CountdownState = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  expired: false,
};

const getCountdownState = (target: string): CountdownState => {
  const now = new Date().getTime();
  const end = new Date(target).getTime();
  const difference = end - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    expired: false,
  };
};

export function Countdown({ target }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<CountdownState>(initialCountdownState);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      setTimeLeft(getCountdownState(target));
    });

    const intervalId = window.setInterval(() => {
      setTimeLeft(getCountdownState(target));
    }, 1000);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.clearInterval(intervalId);
    };
  }, [target]);

  if (timeLeft.expired) {
    return (
      <MotionPanel className="countdown-card" hover="panel" reveal="signboard">
        <m.span
          animate={reduceMotion ? undefined : { x: [0, 3, 0], rotate: [-1, 0.8, -1] }}
          className="countdown-ribbon"
          transition={{ duration: 4.5, ease: eases.settle, repeat: Infinity }}
        >
          Festival day is here
        </m.span>
        <p className="countdown-expired">Today is the day. We look forward to welcoming the community.</p>
      </MotionPanel>
    );
  }

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <MotionPanel className="countdown-card" hover="panel" reveal="signboard">
      <m.span
        animate={reduceMotion ? undefined : { x: [0, 4, 0], rotate: [-1.2, 0.6, -1.2] }}
        className="countdown-ribbon"
        transition={{ duration: 4.2, ease: eases.settle, repeat: Infinity }}
      >
        Countdown to festival day
      </m.span>
      <MotionStagger className="countdown-grid" stagger={0.07}>
        {units.map((unit, index) => (
          <MotionPanel
            as="div"
            className="countdown-unit"
            key={unit.label}
            reveal="card"
            hover="card"
            delay={index * 0.04}
          >
            <m.strong
              animate={reduceMotion ? undefined : { y: [0, -1.5, 0] }}
              transition={{ duration: 2.6 + index * 0.18, ease: eases.settle, repeat: Infinity, repeatDelay: 1.2 }}
            >
              {unit.value.toString().padStart(2, "0")}
            </m.strong>
            <span>{unit.label}</span>
          </MotionPanel>
        ))}
      </MotionStagger>
    </MotionPanel>
  );
}
