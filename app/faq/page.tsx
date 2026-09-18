import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Accordion from "@/components/accordion";
import InlineCta from "@/components/inline-cta";
import { therapist } from "@/lib/therapist";
import { faqPageContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "FAQs | Dr. Maya Reynolds, PsyD — Santa Monica Therapist",
  description:
    "Answers to common questions about starting therapy with Dr. Maya Reynolds, PsyD in Santa Monica, California.",
};

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="py-16 md:py-20">
          <div className="section-shell grid lg:grid-cols-[1fr_1.4fr] gap-12">
            <div>
              <p className="eyebrow text-sm mb-4">FAQs</p>
              <h1 className="font-display text-3xl sm:text-4xl leading-tight text-ink">
                {faqPageContent.headline}
              </h1>
              <p className="mt-5 text-ink/75 leading-relaxed max-w-sm">
                {faqPageContent.intro}
              </p>
              <p className="mt-5 text-ink/75 leading-relaxed max-w-sm">
                If you don&apos;t see your question listed or are ready to
                schedule a free consult,{" "}
                <Link href="/contact" className="text-sage-700 font-semibold underline underline-offset-2">
                  contact us
                </Link>
                .
              </p>
            </div>

            <Accordion idPrefix="faq-page" items={therapist.faq} />
          </div>
        </section>

        <InlineCta />
      </main>
      <Footer />
    </>
  );
}
