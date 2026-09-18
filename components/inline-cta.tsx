import Link from "next/link";

export default function InlineCta({
  heading = "Ready to take the first step?",
  body = "A free 15-minute consultation is a low-pressure way to see if we're a good fit.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <section className="py-16 md:py-20">
      <div className="section-shell">
        <div className="rounded-card bg-sage-50 px-8 py-12 md:px-14 md:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl text-ink">{heading}</h2>
            <p className="mt-2 text-ink/70 max-w-md">{body}</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center justify-center rounded-full bg-sage px-7 py-3.5 text-white font-semibold shadow-card hover:bg-sage-600 hover:-translate-y-0.5 transition-all"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
