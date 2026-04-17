"use client";

import { useState } from "react";

type FaqListProps = {
  items: ReadonlyArray<{
    question: string;
    answer: string;
  }>;
};

export function FaqList({ items }: FaqListProps) {
  const [openItem, setOpenItem] = useState(0);

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = openItem === index;

        return (
          <article className={`faq-item ${isOpen ? "is-open" : ""}`} key={item.question}>
            <button
              className="faq-trigger"
              type="button"
              onClick={() => setOpenItem(isOpen ? -1 : index)}
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
            </button>
            <div className="faq-answer" hidden={!isOpen}>
              <p>{item.answer}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
