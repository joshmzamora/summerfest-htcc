"use client";

import Link from "next/link";
import {
  AnimatePresence,
  LazyMotion,
  MotionConfig,
  domAnimation,
  m,
  useReducedMotion,
  type HTMLMotionProps,
  type Transition,
  type Variants,
} from "framer-motion";
import type { ReactNode } from "react";

type RevealPreset = "poster" | "ribbon" | "signboard" | "card" | "sticker";
type HoverPreset = "panel" | "card" | "button" | "social" | "none";
type PanelTag = "div" | "article" | "section" | "header" | "aside" | "nav" | "li";

const eases = {
  settle: [0.16, 1, 0.3, 1],
  poster: [0.22, 1, 0.36, 1],
  quick: [0.34, 1.56, 0.64, 1],
} as const;

const revealVariants: Record<RevealPreset, Variants> = {
  poster: {
    hidden: { opacity: 0, y: 52, rotate: -1.8, scale: 0.94, filter: "blur(6px)" },
    visible: { opacity: 1, y: 0, rotate: 0, scale: 1, filter: "blur(0px)" },
  },
  ribbon: {
    hidden: { opacity: 0, x: -40, y: 10, rotate: -2.4, scaleX: 0.86, transformOrigin: "left center" },
    visible: { opacity: 1, x: 0, y: 0, rotate: 0, scaleX: 1, transformOrigin: "left center" },
  },
  signboard: {
    hidden: { opacity: 0, y: 40, rotate: 1.4, scale: 0.96, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, rotate: 0, scale: 1, filter: "blur(0px)" },
  },
  card: {
    hidden: { opacity: 0, y: 28, rotate: 0.8, scale: 0.97, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, rotate: 0, scale: 1, filter: "blur(0px)" },
  },
  sticker: {
    hidden: { opacity: 0, y: -22, scale: 0.72, rotate: -8, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, scale: 1, rotate: 0, filter: "blur(0px)" },
  },
};

const hoverPresets: Record<Exclude<HoverPreset, "none">, HTMLMotionProps<"div">["whileHover"]> = {
  panel: { y: -10, rotate: -0.45, scale: 1.01 },
  card: { y: -8, rotate: -0.65, scale: 1.012 },
  button: { y: -4, scale: 1.01 },
  social: { y: -4, rotate: -1.2, scale: 1.025 },
};

const tapPresets: Record<Exclude<HoverPreset, "none">, HTMLMotionProps<"div">["whileTap"]> = {
  panel: { y: -2, scale: 0.995 },
  card: { y: -1, scale: 0.994 },
  button: { y: 1, scale: 0.985 },
  social: { y: -1, scale: 0.99 },
};

function getRevealTransition(preset: RevealPreset, delay: number): Transition {
  switch (preset) {
    case "ribbon":
      return { duration: 0.56, delay, ease: eases.poster };
    case "sticker":
      return { duration: 0.46, delay, ease: eases.quick };
    case "card":
      return { duration: 0.48, delay, ease: eases.settle };
    case "poster":
      return { duration: 0.7, delay, ease: eases.poster };
    case "signboard":
    default:
      return { duration: 0.62, delay, ease: eases.settle };
  }
}

function getHoverTransition(preset: Exclude<HoverPreset, "none">): Transition {
  switch (preset) {
    case "button":
      return { type: "spring", stiffness: 420, damping: 24, mass: 0.72 };
    case "social":
      return { type: "spring", stiffness: 360, damping: 22, mass: 0.74 };
    case "panel":
    case "card":
    default:
      return { type: "spring", stiffness: 280, damping: 22, mass: 0.85 };
  }
}

const panelTags = {
  article: m.article,
  section: m.section,
  header: m.header,
  aside: m.aside,
  nav: m.nav,
  li: m.li,
  div: m.div,
} as const;

export function SiteMotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}

type MotionPanelProps = {
  as?: PanelTag;
  children: ReactNode;
  className?: string;
  reveal?: RevealPreset;
  hover?: HoverPreset;
  delay?: number;
  once?: boolean;
  amount?: number;
} & Pick<HTMLMotionProps<"div">, "exit" | "id" | "role" | "style"> & {
  "aria-hidden"?: boolean;
  "aria-label"?: string;
};

export function MotionPanel({
  as = "div",
  children,
  className,
  reveal = "card",
  hover = "none",
  delay = 0,
  once = true,
  amount = 0.2,
  exit,
  id,
  role,
  style,
  "aria-hidden": ariaHidden,
  "aria-label": ariaLabel,
}: MotionPanelProps) {
  const reduceMotion = useReducedMotion();
  const Tag = panelTags[as];

  return (
    <Tag
      className={className}
      exit={exit}
      id={id}
      initial={reduceMotion ? false : "hidden"}
      aria-hidden={ariaHidden}
      aria-label={ariaLabel}
      role={role}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once, amount }}
      variants={reduceMotion ? undefined : revealVariants[reveal]}
      transition={reduceMotion ? undefined : getRevealTransition(reveal, delay)}
      whileHover={reduceMotion || hover === "none" ? undefined : hoverPresets[hover]}
      whileTap={reduceMotion || hover === "none" ? undefined : tapPresets[hover]}
      style={{ transformOrigin: "center center", ...style }}
    >
      {children}
    </Tag>
  );
}

type MotionStaggerProps = {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
  stagger?: number;
};

export function MotionStagger({
  children,
  className,
  delayChildren = 0,
  stagger = 0.12,
}: MotionStaggerProps) {
  const reduceMotion = useReducedMotion();

  return (
    <m.div
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.18 }}
      variants={
        reduceMotion
          ? undefined
          : {
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: stagger,
                  delayChildren,
                },
              },
            }
      }
    >
      {children}
    </m.div>
  );
}

type MotionPressableLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  download?: boolean;
  ariaLabel?: string;
  "aria-label"?: string;
  rel?: string;
  target?: string;
  fillWidth?: boolean;
  hover?: Exclude<HoverPreset, "none">;
  onClick?: () => void;
};

export function MotionPressableLink({
  href,
  children,
  className,
  external,
  download,
  ariaLabel,
  "aria-label": ariaLabelProp,
  rel,
  target,
  fillWidth = false,
  hover = "button",
  onClick,
}: MotionPressableLinkProps) {
  const reduceMotion = useReducedMotion();
  const resolvedRel = rel ?? (external ? "noreferrer" : undefined);
  const resolvedTarget = target ?? (external ? "_blank" : undefined);
  const resolvedAriaLabel = ariaLabel ?? ariaLabelProp;

  return (
    <m.div
      className={`motion-pressable ${fillWidth ? "is-full-width" : ""}`.trim()}
      whileHover={reduceMotion ? undefined : hoverPresets[hover]}
      whileTap={reduceMotion ? undefined : tapPresets[hover]}
      transition={reduceMotion ? undefined : getHoverTransition(hover)}
      style={{ transformOrigin: "center center" }}
    >
      {external || download || resolvedTarget ? (
        <a
          aria-label={resolvedAriaLabel}
          className={className}
          download={download}
          href={href}
          rel={resolvedRel}
          target={resolvedTarget}
          onClick={onClick}
        >
          {children}
        </a>
      ) : (
        <Link
          aria-label={resolvedAriaLabel}
          className={className}
          href={href}
          onClick={onClick}
        >
          {children}
        </Link>
      )}
    </m.div>
  );
}

export { AnimatePresence, eases, m, revealVariants, useReducedMotion };
