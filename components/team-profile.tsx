import Image from "next/image";
import Link from "next/link";
import { Leaf, Sparkles } from "lucide-react";
import Accordion from "@/components/accordion";
import InlineCta from "@/components/inline-cta";
import type { TeamMember } from "@/lib/site-content";

export default function TeamProfile({ member }: { member: TeamMember }) {
  return (
    <>
      <section className="relative overflow-hidden pt-14 pb-16 md:pt-20 md:pb-24">
        <div
          aria-hidden="true"
          className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-sage/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-24 -right-16 w-80 h-80 rounded-full bg-terracotta/15 blur-3xl"
        />

        <div className="section-shell relative grid lg:grid-cols-[340px_1fr] gap-12 lg:gap-16">
          <div>
            <div className="relative aspect-[4/5] rounded-card overflow-hidden shadow-soft">
              <Image
                src={member.photo}
                alt={`Portrait of ${member.name}`}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 340px, 80vw"
              />
            </div>

            <div className="mt-8 bg-white rounded-card-sm border border-sage-100 p-6">
              <div className="flex items-center gap-2 mb-3">
                <Leaf size={16} className="text-sage-600" aria-hidden="true" />
                <h2 className="text-sm font-semibold tracking-wide text-ink">
                  Specialties
                </h2>
              </div>
              <ul className="space-y-2">
                {member.specialties.map((s) => (
                  <li key={s} className="text-sm text-ink/75 leading-relaxed">
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 bg-white rounded-card-sm border border-sage-100 p-6">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={16} className="text-terracotta-dark" aria-hidden="true" />
                <h2 className="text-sm font-semibold tracking-wide text-ink">
                  Modalities
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {member.modalities.map((m) => (
                  <span
                    key={m}
                    className="text-xs font-medium bg-sage-50 text-sage-700 border border-sage-200 rounded-full px-3 py-1.5"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="eyebrow text-sm mb-3">Meet your therapist</p>
            <h1 className="font-display text-3xl sm:text-4xl text-ink leading-tight">
              {member.name}
            </h1>
            <p className="mt-2 text-sm font-semibold tracking-wide text-sage-700">
              {member.credentialLine}
            </p>

            <div className="mt-8 border-t border-sage-100 pt-8">
              <p className="font-display text-2xl sm:text-3xl text-ink leading-snug">
                {member.heroQuote}
              </p>
            </div>

            <div className="mt-8 space-y-5 text-ink/80 leading-relaxed max-w-prose">
              {member.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-4 inline-flex w-fit items-center justify-center rounded-full bg-sage px-7 py-3.5 text-white font-semibold shadow-card hover:bg-sage-600 hover:-translate-y-0.5 transition-all"
            >
              Schedule an Appointment
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cream/60">
        <div className="section-shell max-w-3xl">
          <p className="font-display text-2xl sm:text-3xl text-ink leading-snug mb-10">
            &ldquo;{member.secondQuote}&rdquo;
          </p>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-5 text-ink/80 leading-relaxed">
            {member.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="section-shell max-w-3xl">
          <p className="eyebrow text-sm mb-4">FAQs</p>
          <h2 className="font-display text-3xl text-ink mb-10">
            A little bit more about me&hellip;
          </h2>
          <Accordion
            idPrefix="personal-faq"
            variant="plus"
            items={member.personalFaqs}
          />
        </div>
      </section>

      <InlineCta />
    </>
  );
}
