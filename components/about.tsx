"use client";

import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
import { therapist } from "@/lib/therapist";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="section-shell grid lg:grid-cols-2 gap-14 items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow text-sm mb-4">A little about my work</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-tight text-ink">
            You&apos;re not broken &mdash; you&apos;re just carrying more than
            one person should have to.
          </h2>
          <div className="mt-6 space-y-5 text-ink/80 leading-relaxed max-w-prose">
            <p>
              I work with adults who feel overwhelmed by anxiety, stress, or
              the lingering effects of past experiences. Many of the people I
              see are high-achieving and self-aware, but feel &ldquo;functional&rdquo;
              on the outside while quietly managing constant worry, tension in
              their body, or a sense that they&apos;re always bracing for
              something to go wrong.
            </p>
            <p>
              My approach is warm, collaborative, and grounded &mdash;
              structured enough to feel supportive, with room for real
              reflection and depth. I draw on CBT, EMDR, mindfulness-based
              practices, and body-oriented techniques, working at a pace that
              prioritizes safety and stabilization so you feel more regulated
              in daily life, not just during our sessions.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-cream rounded-card p-8 md:p-10"
        >
          <h3 className="font-display text-xl text-ink mb-5">
            Areas of focus
          </h3>
          <ul className="space-y-4">
            {therapist.specialties.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 flex items-center justify-center w-6 h-6 rounded-full bg-sage/15 text-sage-600 shrink-0">
                  <Leaf size={13} aria-hidden="true" />
                </span>
                <span className="text-ink/85">{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="font-display text-xl text-ink mt-8 mb-4">
            Modalities I use
          </h3>
          <div className="flex flex-wrap gap-2">
            {therapist.modalities.map((m) => (
              <span
                key={m}
                className="text-sm font-medium bg-white text-sage-700 border border-sage-200 rounded-full px-4 py-1.5"
              >
                {m}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
