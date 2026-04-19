"use client";

import { useState } from "react";

import { AnimatePresence, MotionPanel, MotionStagger, eases, m, useReducedMotion } from "@/components/FestivalMotion";

type FaqListProps = {
  items: ReadonlyArray<{
    question: string;
    answer: string;
  }>;
};

export function FaqList({ items }: FaqListProps) {
  const [openItem, setOpenItem] = useState(0);
  const reduceMotion = useReducedMotion();

  return (
    <MotionStagger className="faq-list" stagger={0.08}>
      {items.map((item, index) => {
        const isOpen = openItem === index;

        return (
          <MotionPanel
            as="article"
            className={`faq-item ${isOpen ? "is-open" : ""}`}
            hover="card"
            key={item.question}
            reveal="card"
          >
            <m.button
              className="faq-trigger"
              type="button"
              whileTap={reduceMotion ? undefined : { scale: 0.992 }}
              onClick={() => setOpenItem(isOpen ? -1 : index)}
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <m.span
                animate={reduceMotion ? { rotate: 0 } : { rotate: isOpen ? 45 : 0 }}
                aria-hidden="true"
                className="faq-indicator"
                transition={{ duration: 0.24, ease: eases.settle }}
              >
                +
              </m.span>
            </m.button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <m.div
                  animate={{ height: "auto", opacity: 1 }}
                  className="faq-answer"
                  exit={{ height: 0, opacity: 0 }}
                  initial={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: eases.settle }}
                >
                  <m.p
                    animate={{ y: 0, opacity: 1 }}
                    initial={{ y: -4, opacity: 0 }}
                    transition={{ duration: 0.24, ease: eases.settle, delay: 0.02 }}
                  >
                    {item.answer}
                  </m.p>
                </m.div>
              ) : null}
            </AnimatePresence>
          </MotionPanel>
        );
      })}
    </MotionStagger>
  );
}
