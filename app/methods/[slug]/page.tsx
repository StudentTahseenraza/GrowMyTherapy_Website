import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import InlineCta from "@/components/inline-cta";
import { methodPages } from "@/lib/site-content";

export function generateStaticParams() {
  return methodPages.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = methodPages.find((m) => m.slug === slug);
  if (!page) return {};
  return {
    title: `${page.title} | Dr. Maya Reynolds, PsyD`,
    description: page.intro,
  };
}

export default async function MethodDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = methodPages.find((m) => m.slug === slug);
  if (!page) notFound();

  const highlightIndex = page.heroLine1
    .toLowerCase()
    .indexOf(page.heroHighlight.toLowerCase());

  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          eyebrow={`${page.eyebrow} \u00b7 Dr. Maya Reynolds, PsyD`}
          heading={
            <>
              {highlightIndex === -1 ? (
                page.heroLine1
              ) : (
                <>
                  {page.heroLine1.slice(0, highlightIndex)}
                  <em className="italic text-sage-600 font-display">
                    {page.heroLine1.slice(
                      highlightIndex,
                      highlightIndex + page.heroHighlight.length
                    )}
                  </em>
                  {page.heroLine1.slice(highlightIndex + page.heroHighlight.length)}
                </>
              )}
              {page.heroLine2 && (
                <>
                  <br />
                  {page.heroLine2}
                </>
              )}
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

        <InlineCta heading={`Curious if ${page.navLabel} is right for you?`} />
      </main>
      <Footer />
    </>
  );
}
