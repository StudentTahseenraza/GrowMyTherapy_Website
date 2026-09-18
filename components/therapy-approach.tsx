"use client";

import { motion } from "framer-motion";
import { HandHeart, Search, Wrench, Sprout, type LucideIcon } from "lucide-react";
import { therapist } from "@/lib/therapist";

const icons: Record<string, LucideIcon> = {
  "hand-heart": HandHeart,
  search: Search,
  wrench: Wrench,
  sprout: Sprout,
};

export default function TherapyApproach() {
  return (
    <section id="approach" className="py-20 md:py-28">
      <div className="section-shell">
        <div className="max-w-2xl mx-auto text-center">
          <p className="eyebrow text-sm mb-4">My approach</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-tight text-ink">
            How Therapy Can Support Your Healing Journey
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {therapist.approachSteps.map((step, i) => {
            const Icon = icons[step.icon];
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center px-2"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-sage-100 text-sage-700 mb-5">
                  <Icon size={26} strokeWidth={1.75} aria-hidden="true" />
                </div>
                <span className="text-xs font-semibold tracking-wide text-terracotta-dark mb-2">
                  Step {step.step}
                </span>
                <h3 className="font-display text-lg text-ink mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-ink/70 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}