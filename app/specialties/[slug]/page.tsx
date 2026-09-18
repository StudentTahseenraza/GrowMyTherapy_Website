import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import Accordion from "@/components/accordion";
import InlineCta from "@/components/inline-cta";
import { specialtyPages } from "@/lib/site-content";
import { therapist } from "@/lib/therapist";

export function generateStaticParams() {
  return specialtyPages.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = specialtyPages.find((s) => s.slug === slug);
  if (!page) return {};
  return {
    title: `${page.title} | Dr. Maya Reynolds, PsyD`,
    description: page.intro,
  };
}

export default async function SpecialtyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = specialtyPages.find((s) => s.slug === slug);
  if (!page) notFound();

  const relatedFaqs = therapist.faq.filter((f) =>
    page.relatedFaqSlugs.includes(f.question)
  );

  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          eyebrow={`${page.eyebrow} \u00b7 Santa Monica, CA`}
          heading={
            <>
              {page.heroLine1} <em className="italic text-sage-600 font-display">{page.heroHighlight}</em>
            </>
          }
          image={page.heroImage}
          imageAlt=""
          subheading={page.intro}
        />

        <section className="py-16 md:py-20">
          <div className="section-shell max-w-2xl space-y-6 text-ink/80 leading-relaxed">
            {page.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        {relatedFaqs.length > 0 && (
          <section className="py-16 md:py-20 bg-cream/50">
            <div className="section-shell max-w-2xl">
              <p className="eyebrow text-sm mb-4">Related questions</p>
              <h2 className="font-display text-2xl sm:text-3xl text-ink mb-8">
                You might be wondering
              </h2>
              <Accordion idPrefix="specialty-faq" items={relatedFaqs} />
            </div>
          </section>
        )}

        <InlineCta
          heading={`Ready to talk about ${page.navLabel.toLowerCase()}?`}
        />
      </main>
      <Footer />
    </>
  );
}
