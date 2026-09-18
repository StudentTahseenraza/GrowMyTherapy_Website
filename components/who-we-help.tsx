"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Wind,
  Shield,
  BatteryLow,
  Sparkles,
  CloudRain,
  BrainCircuit,
  type LucideIcon,
} from "lucide-react";
import { therapist } from "@/lib/therapist";

const icons: Record<string, LucideIcon> = {
  wind: Wind,
  shield: Shield,
  "battery-low": BatteryLow,
  sparkles: Sparkles,
  "cloud-rain": CloudRain,
  "brain-circuit": BrainCircuit,
};

export default function WhoWeHelp() {
  return (
    <section aria-label="Who therapy helps" className="py-20 md:py-28 bg-cream/50">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="eyebrow text-sm mb-4">Who I work with</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-tight text-ink">
            Adults experiencing
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {therapist.whoWeHelp.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                className="group bg-white rounded-card-sm border border-sage-100 overflow-hidden hover:scale-[1.02] transition-transform"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                  />
                  <span className="absolute bottom-3 left-3 flex items-center justify-center w-10 h-10 rounded-full bg-white/90 backdrop-blur text-sage-600 shadow-card">
                    <Icon size={18} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg text-ink mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
