"use client";

import { useEffect, useState } from "react";

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
  const [timeLeft, setTimeLeft] = useState<CountdownState>(() => getCountdownState(target));

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTimeLeft(getCountdownState(target));
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [target]);

  if (timeLeft.expired) {
    return (
      <div className="countdown-card" aria-live="polite">
        <span className="countdown-ribbon">Summer Fest is here</span>
        <p className="countdown-expired">Today is the day. We look forward to welcoming the community.</p>
      </div>
    );
  }

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="countdown-card" aria-label="Countdown to Summer Fest">
      <span className="countdown-ribbon">Countdown to the festival</span>
      <div className="countdown-grid">
        {units.map((unit) => (
          <div className="countdown-unit" key={unit.label}>
            <strong>{unit.value.toString().padStart(2, "0")}</strong>
            <span>{unit.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
