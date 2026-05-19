"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: readonly FAQItem[];
  limit?: number;
};

export function FAQAccordion({ items, limit }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const displayItems = limit ? items.slice(0, limit) : items;

  return (
    <div className="divide-y divide-brand-border rounded-2xl border border-brand-border bg-white">
      {displayItems.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left transition hover:bg-brand-teal-light/40"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-brand-teal-dark">
                {item.question}
              </span>
              <span
                className={`mt-1 shrink-0 text-brand-orange transition ${isOpen ? "rotate-45" : ""}`}
                aria-hidden
              >
                +
              </span>
            </button>
            {isOpen && (
              <div className="px-5 pb-4 text-sm leading-relaxed text-muted">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
