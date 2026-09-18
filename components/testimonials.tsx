"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { therapist } from "@/lib/therapist";

export default function Testimonials() {
  return (
    <section aria-label="Client testimonials" className="py-20 md:py-28">
      <div className="section-shell">
        <div className="max-w-2xl mb-12">
          <p className="eyebrow text-sm mb-4">In their words</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-tight text-ink">
            What clients have shared
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {therapist.testimonials.map((t, i) => (
            <motion.figure
              key={t.attribution + i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-sage-50 rounded-card p-8 flex flex-col"
            >
              <Quote
                size={28}
                className="text-terracotta-dark mb-4"
                aria-hidden="true"
              />
              <blockquote className="text-ink/85 leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-sm font-semibold text-sage-700">
                {t.attribution}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
