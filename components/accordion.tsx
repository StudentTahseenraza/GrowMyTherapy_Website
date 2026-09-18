"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus } from "lucide-react";

export interface AccordionItemData {
  question: string;
  answer: string;
}

export default function Accordion({
  items,
  idPrefix,
  variant = "chevron",
  defaultOpenIndex = null,
}: {
  items: AccordionItemData[];
  idPrefix: string;
  variant?: "chevron" | "plus";
  defaultOpenIndex?: number | null;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const panelId = `${idPrefix}-panel-${i}`;
        const buttonId = `${idPrefix}-button-${i}`;
        return (
          <div
            key={item.question}
            className="bg-white rounded-card-sm border border-sage-100 overflow-hidden"
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 font-semibold text-ink"
              >
                {item.question}
                {variant === "chevron" ? (
                  <ChevronDown
                    size={20}
                    aria-hidden="true"
                    className={`shrink-0 text-sage-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                ) : (
                  <Plus
                    size={18}
                    aria-hidden="true"
                    className={`shrink-0 text-sage-600 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                )}
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-ink/75 leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
