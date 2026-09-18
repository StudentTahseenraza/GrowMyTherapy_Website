import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import InlineCta from "@/components/inline-cta";
import { specialtyPages } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Specialties | Dr. Maya Reynolds, PsyD — Santa Monica Therapist",
  description:
    "Therapy for anxiety, trauma, burnout, and perfectionism in Santa Monica, California.",
};

export default function SpecialtiesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="py-16 md:py-20">
          <div className="section-shell max-w-2xl">
            <p className="eyebrow text-sm mb-4">How I can help</p>
            <h1 className="font-display text-3xl sm:text-4xl leading-tight text-ink">
              Our areas of expertise
            </h1>
            <p className="mt-5 text-ink/75 leading-relaxed">
              Focused, evidence-based support for the things that tend to
              weigh most heavily on thoughtful, high-achieving adults.
            </p>
          </div>

          <div className="section-shell mt-12 grid md:grid-cols-3 gap-6">
            {specialtyPages.map((s) => (
              <Link
                key={s.slug}
                href={`/specialties/${s.slug}`}
                className="group bg-white rounded-card overflow-hidden shadow-card hover:scale-[1.02] transition-transform"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={s.heroImage}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 380px, 100vw"
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-display text-lg text-ink">{s.title}</h2>
                  <p className="mt-2 text-sm text-ink/70 leading-relaxed">
                    {s.intro}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sage-700 group-hover:gap-3 transition-all">
                    Learn more <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <InlineCta />
      </main>
      <Footer />
    </>
  );
}
