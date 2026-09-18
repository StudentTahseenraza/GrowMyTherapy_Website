"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { specialtyPages, methodPages } from "@/lib/site-content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 bg-canvas/90 backdrop-blur border-b border-sage-100">
      <nav
        aria-label="Primary"
        className="section-shell flex items-center justify-between h-20"
      >
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-display text-xl md:text-2xl text-ink">
            Dr. Maya Reynolds
          </span>
          <span className="text-xs tracking-wide text-sage-600 font-medium">
            PsyD &middot; Licensed Clinical Psychologist
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8 font-medium text-sm text-ink">
          <li>
            <Link href="/#about" className="hover:text-sage-600 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/team" className="hover:text-sage-600 transition-colors">
              Our Team
            </Link>
          </li>

          <li className="relative group">
            <Link
              href="/specialties"
              className="flex items-center gap-1 hover:text-sage-600 transition-colors py-2"
            >
              Specialties
              <ChevronDown size={14} aria-hidden="true" />
            </Link>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 hidden group-hover:block group-focus-within:block">
              <ul className="min-w-[260px] bg-white rounded-card-sm shadow-soft border border-sage-100 py-2">
                {specialtyPages.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/specialties/${s.slug}`}
                      className="block px-5 py-2.5 text-sm hover:bg-sage-50 hover:text-sage-700"
                    >
                      {s.navLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          <li className="relative group">
            <Link
              href="/methods"
              className="flex items-center gap-1 hover:text-sage-600 transition-colors py-2"
            >
              Methods
              <ChevronDown size={14} aria-hidden="true" />
            </Link>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 hidden group-hover:block group-focus-within:block">
              <ul className="min-w-[260px] bg-white rounded-card-sm shadow-soft border border-sage-100 py-2">
                {methodPages.map((m) => (
                  <li key={m.slug}>
                    <Link
                      href={`/methods/${m.slug}`}
                      className="block px-5 py-2.5 text-sm hover:bg-sage-50 hover:text-sage-700"
                    >
                      {m.navLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          <li>
            <Link href="/faq" className="hover:text-sage-600 transition-colors">
              FAQs
            </Link>
          </li>
        </ul>

        <Link
          href="/contact"
          className="hidden lg:inline-flex items-center rounded-full border border-ink px-5 py-2.5 text-sm font-semibold hover:bg-ink hover:text-canvas transition-colors"
        >
          Book a Consultation
        </Link>

        <button
          type="button"
          className="lg:hidden p-2 rounded-full hover:bg-sage-100"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="lg:hidden section-shell pb-6 flex flex-col gap-1 border-t border-sage-100"
        >
          <Link
            href="/#about"
            onClick={() => setOpen(false)}
            className="py-3 text-base font-medium border-b border-sage-100"
          >
            About
          </Link>
          <Link
            href="/team"
            onClick={() => setOpen(false)}
            className="py-3 text-base font-medium border-b border-sage-100"
          >
            Our Team
          </Link>

          <div className="border-b border-sage-100">
            <button
              type="button"
              className="w-full flex items-center justify-between py-3 text-base font-medium"
              aria-expanded={mobileSection === "specialties"}
              onClick={() =>
                setMobileSection(mobileSection === "specialties" ? null : "specialties")
              }
            >
              Specialties
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  mobileSection === "specialties" ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>
            {mobileSection === "specialties" && (
              <ul className="pb-3 pl-3 flex flex-col gap-1">
                {specialtyPages.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/specialties/${s.slug}`}
                      onClick={() => setOpen(false)}
                      className="block py-2 text-sm text-ink/75"
                    >
                      {s.navLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="border-b border-sage-100">
            <button
              type="button"
              className="w-full flex items-center justify-between py-3 text-base font-medium"
              aria-expanded={mobileSection === "methods"}
              onClick={() =>
                setMobileSection(mobileSection === "methods" ? null : "methods")
              }
            >
              Methods
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  mobileSection === "methods" ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>
            {mobileSection === "methods" && (
              <ul className="pb-3 pl-3 flex flex-col gap-1">
                {methodPages.map((m) => (
                  <li key={m.slug}>
                    <Link
                      href={`/methods/${m.slug}`}
                      onClick={() => setOpen(false)}
                      className="block py-2 text-sm text-ink/75"
                    >
                      {m.navLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link
            href="/faq"
            onClick={() => setOpen(false)}
            className="py-3 text-base font-medium border-b border-sage-100"
          >
            FAQs
          </Link>

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center justify-center rounded-full bg-sage text-white px-5 py-3 text-sm font-semibold"
          >
            Book a Consultation
          </Link>
        </div>
      )}
    </header>
  );
}
