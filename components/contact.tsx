"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Mail, Phone, Monitor } from "lucide-react";
import { therapist } from "@/lib/therapist";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-card bg-sage text-white px-8 py-14 md:px-16 md:py-20">
          <div
            aria-hidden="true"
            className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-terracotta/25"
          />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-3xl sm:text-4xl leading-tight">
                You Don&apos;t Have to Carry Everything Alone.
              </h2>
              <p className="mt-5 text-white/85 leading-relaxed max-w-prose">
                Reaching out is often the hardest part. A free 15-minute
                consultation is a low-pressure way to ask questions, share
                what&apos;s going on, and see if we&apos;re a good fit &mdash;
                no commitment required.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-white text-sage-700 px-7 py-3.5 font-semibold shadow-card hover:-translate-y-0.5 transition-transform"
              >
                Book Consultation
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/10 rounded-card-sm p-7 backdrop-blur-sm space-y-5"
            >
              <div className="flex items-start gap-4">
                <MapPin size={20} className="mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-semibold">Santa Monica Office</p>
                  <p className="text-white/80 text-sm">
                    {therapist.contact.address}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Monitor size={20} className="mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-semibold">California Telehealth</p>
                  <p className="text-white/80 text-sm">
                    Secure video sessions, statewide
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone size={20} className="mt-0.5 shrink-0" aria-hidden="true" />
                <a href={`tel:${therapist.contact.phone}`} className="font-semibold hover:underline">
                  {therapist.contact.phone}
                </a>
              </div>
              <div className="flex items-start gap-4">
                <Mail size={20} className="mt-0.5 shrink-0" aria-hidden="true" />
                <a href={`mailto:${therapist.contact.email}`} className="font-semibold hover:underline">
                  {therapist.contact.email}
                </a>
              </div>

              {/* Practice details card */}
              <div className="mt-6 pt-6 border-t border-white/20 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wide mb-1">
                    Practice
                  </p>
                  <p className="font-semibold">{therapist.contact.ageRange}</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wide mb-1">
                    Consultation
                  </p>
                  <p className="font-semibold">
                    Free {therapist.contact.consultLength}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}