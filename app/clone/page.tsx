import Image from "next/image";
import Link from "next/link";
import { cloneContent as c } from "@/lib/clone-content";

export const metadata = {
  title: "Stage 1 Clone Reference — Layout & Structure Study",
  robots: { index: false, follow: false },
};

export default function ClonePage() {
  return (
    <>
      {/* NAVBAR */}
      <header className="border-b border-[#33403D]/10">
        <nav className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-10 h-24">
          <div className="leading-none">
            <p
              className="text-2xl"
              style={{ fontFamily: "var(--font-clone-serif)" }}
            >
              {c.brand.name}
            </p>
            <p className="text-[11px] tracking-[0.2em] text-[#6E8B85]">
              {c.brand.subline}
            </p>
          </div>

          <ul className="hidden lg:flex items-center gap-8 text-xs tracking-[0.15em] uppercase">
            {c.nav.map((item) => (
              <li key={item.label} className="relative group">
                <a href={item.href} className="py-2 inline-block hover:text-[#6E8B85]">
                  {item.label}
                </a>
                {"children" in item && item.children && (
                  <div className="absolute left-0 top-full hidden group-hover:block pt-2">
                    <ul className="min-w-[220px] bg-white border border-[#33403D]/10 py-2 shadow-sm">
                      {item.children.map((child) => (
                        <li key={child}>
                          <span className="block px-4 py-2 text-[11px] normal-case tracking-normal text-[#33403D]/80">
                            {child}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden lg:inline-flex items-center rounded-full border border-[#33403D]/40 px-6 py-2.5 text-xs tracking-[0.15em] uppercase hover:bg-[#33403D] hover:text-white transition-colors"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="grid lg:grid-cols-2">
        <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[560px]">
          <Image src="/images/clone/hero-1.svg" alt="" fill className="object-cover" priority />
        </div>
        <div className="relative flex items-center px-6 md:px-14 py-14">
          <div className="max-w-xl">
            <p className="text-xs tracking-[0.15em] uppercase text-[#6E8B85] mb-6">
              {c.hero.eyebrow}
            </p>
            <h1
              className="text-4xl sm:text-5xl leading-[1.15] text-[#2C3835]"
              style={{ fontFamily: "var(--font-clone-serif)" }}
            >
              {c.hero.headlinePlain}{" "}
              <span
                className="text-[#6E8B85]"
                style={{ fontFamily: "var(--font-clone-script)" }}
              >
                {c.hero.headlineScript}
              </span>
            </h1>
            <p className="mt-6 text-[#33403D]/80 leading-relaxed max-w-md">
              {c.hero.sub}
            </p>
            <a
              href="#contact"
              className="mt-8 inline-block text-sm tracking-[0.1em] uppercase border-b border-[#33403D] pb-1 hover:text-[#6E8B85] hover:border-[#6E8B85] transition-colors"
            >
              {c.hero.cta}
            </a>
          </div>
          <div className="hidden xl:block absolute -right-16 top-1/2 -translate-y-1/2 w-40 h-64 overflow-hidden">
            <Image src="/images/clone/hero-2.svg" alt="" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* HOPE / MISSION SECTION */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-28 grid lg:grid-cols-[1fr_1.1fr] gap-14 items-start">
        <h2
          className="text-3xl sm:text-4xl leading-tight text-[#2C3835]"
          style={{ fontFamily: "var(--font-clone-serif)" }}
        >
          {c.hopeSection.heading}
        </h2>
        <div className="space-y-6">
          <p className="text-xs tracking-[0.1em] uppercase text-[#33403D] font-semibold">
            {c.hopeSection.eyebrowLead}
          </p>
          {c.hopeSection.paragraphs.map((p, i) => (
            <p key={i} className="text-[#33403D]/80 leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* WHO WE HELP */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-10 pb-20 md:pb-28">
        <h2
          className="text-3xl sm:text-4xl mb-10 text-[#2C3835]"
          style={{ fontFamily: "var(--font-clone-serif)" }}
        >
          {c.whoWeHelp.heading}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {c.whoWeHelp.items.map((item, i) => (
            <div key={item.title}>
              <div className="relative aspect-[4/5] mb-5">
                <Image
                  src={i % 2 === 0 ? "/images/clone/hero-1.svg" : "/images/clone/side-portrait.svg"}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <h3
                className="text-xl mb-2 text-[#2C3835]"
                style={{ fontFamily: "var(--font-clone-serif)" }}
              >
                {item.title}
              </h3>
              <p className="text-sm text-[#33403D]/75 leading-relaxed">{item.blurb}</p>
            </div>
          ))}
        </div>
      </section>

      {/* QUOTE BANNER */}
      <section className="relative">
        <div className="relative h-[420px] md:h-[520px]">
          <Image src="/images/clone/quote-banner.svg" alt="" fill className="object-cover" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-2xl px-6 md:px-16 text-white">
              <p className="text-2xl sm:text-3xl leading-snug" style={{ fontFamily: "var(--font-clone-serif)" }}>
                {c.quoteBanner.line1}
              </p>
              <p
                className="mt-3 text-xl italic"
                style={{ fontFamily: "var(--font-clone-serif)" }}
              >
                {c.quoteBanner.line2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AREAS OF EXPERTISE */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-[1fr_1.4fr] gap-14">
        <h2
          className="text-3xl sm:text-4xl text-[#2C3835]"
          style={{ fontFamily: "var(--font-clone-serif)" }}
        >
          {c.expertise.heading}{" "}
          <span style={{ fontFamily: "var(--font-clone-script)" }} className="text-[#6E8B85]">
            {c.expertise.headingScript}
          </span>
        </h2>
        <div className="grid sm:grid-cols-2 gap-x-10">
          {c.expertise.columns.map((col, i) => (
            <ul key={i}>
              {col.map((item) => (
                <li
                  key={item}
                  className="py-4 border-b border-[#33403D]/10 text-sm tracking-[0.05em] uppercase text-[#33403D]/80"
                >
                  {item}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-10 pb-20 md:pb-28 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-xs tracking-[0.15em] uppercase text-[#6E8B85] mb-4">
            {c.howWeWork.eyebrow}
          </p>
          <h2
            className="text-3xl sm:text-4xl mb-6 text-[#2C3835]"
            style={{ fontFamily: "var(--font-clone-serif)" }}
          >
            {c.howWeWork.heading}
          </h2>
          <div className="space-y-5 text-[#33403D]/80 leading-relaxed">
            {c.howWeWork.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
        <div className="relative aspect-[4/5]">
          <Image src="/images/clone/side-portrait.svg" alt="" fill className="object-cover" />
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="border-t border-[#33403D]/10 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-xl mb-3" style={{ fontFamily: "var(--font-clone-serif)" }}>
              {c.brand.name}
            </p>
            <p className="text-sm text-[#33403D]/70 max-w-xs leading-relaxed">
              {c.footer.tagline}
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.15em] uppercase text-[#33403D] mb-4">Navigate</p>
            <ul className="space-y-2 text-sm text-[#33403D]/75">
              <li><a href="#about" className="hover:text-[#6E8B85]">Home</a></li>
              <li><a href="#about" className="hover:text-[#6E8B85]">About</a></li>
              <li><a href="#faqs" className="hover:text-[#6E8B85]">FAQs</a></li>
              <li><a href="#contact" className="hover:text-[#6E8B85]">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-[0.15em] uppercase text-[#33403D] mb-4">Our Team</p>
            <ul className="space-y-2 text-sm text-[#33403D]/75">
              {c.nav[1].children?.slice(0, 5).map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-[0.15em] uppercase text-[#33403D] mb-4">Contact</p>
            {c.footer.address.map((line) => (
              <p key={line} className="text-sm text-[#33403D]/75">{line}</p>
            ))}
            <p className="text-sm text-[#33403D]/75 mt-3">{c.footer.email}</p>
            <p className="text-sm text-[#33403D]/75">{c.footer.phone}</p>
            <p className="text-sm text-[#33403D]/60 mt-4 italic">{c.footer.serviceArea}</p>
          </div>
        </div>

        <div className="border-t border-[#33403D]/10">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#33403D]/60">
            <p>Layout &amp; structure study — Stage 1 clone reference, not a live business.</p>
            <div className="flex items-center gap-4">
              <span>Terms</span>
              <span>Privacy Policy</span>
              <span>Disclaimer</span>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-[#2C3835] text-white text-center text-xs py-3 px-4">
        This page is a Stage&nbsp;1 structural clone built for internal review — original
        placeholder copy and illustrations, matching the reference site&apos;s layout, spacing,
        typography pairing, and color palette. The redesigned site for Dr. Maya Reynolds is at{" "}
        <Link href="/" className="underline">the homepage</Link>.
      </div>
    </>
  );
}
