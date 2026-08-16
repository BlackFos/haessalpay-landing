"use client";

import { useState } from "react";
import { FAQS } from "../site-data";

export function FAQList({
  limit,
}: {
  limit?: number;
}) {
  const items = typeof limit === "number" ? FAQS.slice(0, limit) : FAQS;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <article className={`faq-item ${isOpen ? "open" : ""}`} key={item.q}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="faq-q">Q</span>
              <strong>{item.q}</strong>
              <i aria-hidden="true" />
            </button>
            <div className="faq-answer">
              <p>{item.a}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
