"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Brain, HeartHandshake, BatteryLow, ArrowRight, type LucideIcon } from "lucide-react";
import { therapist } from "@/lib/therapist";

const icons: Record<string, LucideIcon> = {
  brain: Brain,
  "heart-handshake": HeartHandshake,
  "battery-low": BatteryLow,
};

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-cream/50">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="eyebrow text-sm mb-4">How I can help</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-tight text-ink">
            Therapy focused on what&apos;s weighing on you most
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6 md:gap-8">
          {therapist.services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="bg-white rounded-card p-8 shadow-card hover:scale-[1.02] transition-transform"
              >
                <span className="flex items-center justify-center w-14 h-14 rounded-full bg-terracotta/15 text-terracotta-dark mb-6">
                  <Icon size={26} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="font-display text-xl text-ink mb-3">
                  {service.title}
                </h3>
                <p className="text-ink/75 leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  href={`/specialties/${service.slug}`}
                  className="inline-flex items-center gap-2 text-sage-700 font-semibold hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
