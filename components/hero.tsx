"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { therapist } from "@/lib/therapist";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-14 pb-20 md:pt-20 md:pb-28">
      {/* organic background blobs */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-32 w-[420px] h-[420px] rounded-full bg-terracotta/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-24 w-[380px] h-[380px] rounded-full bg-sage/20 blur-3xl"
      />

      <div className="section-shell relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="eyebrow text-sm mb-5">
            Online &amp; In-Person Therapy in Santa Monica &amp; Across California
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.1] text-ink">
            {therapist.tagline}
          </h1>
          <p className="mt-6 text-lg text-ink/80 max-w-prose leading-relaxed">
            If anxiety, past trauma, burnout, or the pressure to be perfect
            have started to feel like too much to carry alone, you don&apos;t
            have to keep white-knuckling it. I help adults in Santa Monica and
            throughout California find steadier ground &mdash; in person or
            through secure telehealth, wherever you are.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-sage px-7 py-3.5 text-white font-semibold shadow-card hover:bg-sage-600 hover:-translate-y-0.5 transition-all"
            >
              Schedule a Free 15-Minute Consultation
            </Link>
            <a
              href="#approach"
              className="inline-flex items-center justify-center rounded-full border border-ink/20 px-7 py-3.5 font-semibold hover:bg-ink hover:text-canvas hover:-translate-y-0.5 transition-all"
            >
              Learn About My Approach
            </a>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
            {therapist.heroTrustChips.map((chip) => (
              <li
                key={chip}
                className="flex items-center gap-2 text-sm font-medium text-ink/80"
              >
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-sage-100 text-sage-600">
                  <Check size={13} strokeWidth={3} />
                </span>
                {chip}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative mx-auto max-w-md lg:max-w-none"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-sage-200 via-cream to-terracotta-light/60 -z-10 rotate-2"
          />
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-soft aspect-[4/5]">
            <Image
              src="/images/portrait-maya.jpg"
              alt="Portrait of Dr. Maya Reynolds, PsyD, smiling warmly"
              fill
              priority
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
