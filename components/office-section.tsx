"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Check } from "lucide-react";
import { therapist } from "@/lib/therapist";

const galleryImages = [
  {
    src: "/images/office-1.jpg",
    alt: "Bright, calm therapy office seating area with tall windows, exposed brick, and natural light",
  },
  {
    src: "/images/office-2.jpg",
    alt: "Quiet, comfortable office seating with a bookshelf, plants, and warm natural light",
  },
];

export default function OfficeSection() {
  const { office } = therapist;

  return (
    <section id="office" className="py-20 md:py-28">
      <div className="section-shell grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow text-sm mb-4">The space</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-tight text-ink mb-5">
            {office.title}
          </h2>
          <p className="text-ink/80 leading-relaxed max-w-prose mb-7">
            {office.subtitle}
          </p>

          <ul className="space-y-3 mb-8">
            {office.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-ink/85">
                <span className="mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-sage-100 text-sage-600 shrink-0">
                  <Check size={12} strokeWidth={3} aria-hidden="true" />
                </span>
                {f}
              </li>
            ))}
          </ul>

          <div className="inline-flex items-start gap-4 bg-terracotta/10 rounded-card-sm p-5">
            <span className="flex items-center justify-center w-11 h-11 rounded-full bg-white text-terracotta-dark shrink-0">
              <MapPin size={20} aria-hidden="true" />
            </span>
            <div>
              <p className="font-display text-base text-ink">
                {office.infoCard.title}
              </p>
              <p className="text-sm text-ink/70 mt-1">
                {office.infoCard.lines.join(" &middot; ")}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 gap-4 sm:gap-5"
        >
          <div className="relative aspect-[4/3] rounded-card overflow-hidden shadow-card">
            <Image
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-card overflow-hidden shadow-card">
            <Image
              src={galleryImages[1].src}
              alt={galleryImages[1].alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
