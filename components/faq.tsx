import Accordion from "@/components/accordion";
import { therapist } from "@/lib/therapist";

export default function Faq() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-cream/50">
      <div className="section-shell max-w-3xl">
        <div className="mb-12">
          <p className="eyebrow text-sm mb-4">Common questions</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-tight text-ink">
            Frequently asked questions
          </h2>
        </div>

        <Accordion items={therapist.faq} idPrefix="home-faq" defaultOpenIndex={0} />
      </div>
    </section>
  );
}
