import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import InlineCta from "@/components/inline-cta";
import { methodPages } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Methods | Dr. Maya Reynolds, PsyD — Santa Monica Therapist",
  description:
    "CBT, EMDR, mindfulness-based practices, and body-oriented techniques used in therapy with Dr. Maya Reynolds, PsyD.",
};

export default function MethodsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="py-16 md:py-20">
          <div className="section-shell max-w-2xl">
            <p className="eyebrow text-sm mb-4">How we work</p>
            <h1 className="font-display text-3xl sm:text-4xl leading-tight text-ink">
              Our methods
            </h1>
            <p className="mt-5 text-ink/75 leading-relaxed">
              Evidence-based approaches, tailored to what your mind and body
              actually need &mdash; not a one-size-fits-all script.
            </p>
          </div>

          <div className="section-shell mt-12 grid md:grid-cols-2 gap-6">
            {methodPages.map((m) => (
              <Link
                key={m.slug}
                href={`/methods/${m.slug}`}
                className="group flex gap-5 bg-white rounded-card overflow-hidden shadow-card hover:scale-[1.02] transition-transform"
              >
                <div className="relative w-32 sm:w-44 shrink-0">
                  <Image
                    src={m.heroImage}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="180px"
                  />
                </div>
                <div className="py-6 pr-6">
                  <h2 className="font-display text-lg text-ink">{m.title}</h2>
                  <p className="mt-2 text-sm text-ink/70 leading-relaxed">
                    {m.intro}
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
