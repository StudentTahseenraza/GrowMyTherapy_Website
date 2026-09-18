import Link from "next/link";
import { therapist } from "@/lib/therapist";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-sage-100 bg-cream/60">
      <div className="section-shell py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-xl text-ink">Dr. Maya Reynolds</p>
          <p className="text-sm text-sage-700 mt-1">PsyD, Licensed Clinical Psychologist</p>
          <p className="text-sm text-ink/70 mt-4 max-w-xs">
            Compassionate, evidence-based therapy for anxiety, trauma,
            burnout, and perfectionism.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="font-semibold text-ink mb-4 text-sm">Explore</p>
          <ul className="space-y-3 text-sm text-ink/70">
            <li><Link href="/#about" className="hover:text-sage-700">About</Link></li>
            <li><Link href="/team" className="hover:text-sage-700">Our Team</Link></li>
            <li><Link href="/specialties" className="hover:text-sage-700">Specialties</Link></li>
            <li><Link href="/methods" className="hover:text-sage-700">Methods</Link></li>
            <li><Link href="/faq" className="hover:text-sage-700">FAQs</Link></li>
            <li><Link href="/contact" className="hover:text-sage-700">Contact</Link></li>
          </ul>
        </nav>

        <div>
          <p className="font-semibold text-ink mb-4 text-sm">Location</p>
          <p className="text-sm text-ink/70 leading-relaxed">
            {therapist.contact.address}
          </p>
          <p className="text-sm text-ink/70 mt-3">
            California Telehealth &middot; Statewide
          </p>
        </div>

        <div>
          <p className="font-semibold text-ink mb-4 text-sm">Contact</p>
          <p className="text-sm text-ink/70">{therapist.contact.phone}</p>
          <p className="text-sm text-ink/70 mt-2">{therapist.contact.email}</p>
        </div>
      </div>

      <div className="border-t border-sage-100">
        <div className="section-shell py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink/60">
          <p>&copy; {year} Dr. Maya Reynolds, PsyD. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-sage-700">Terms</a>
            <a href="#" className="hover:text-sage-700">Privacy Policy</a>
            <a href="#" className="hover:text-sage-700">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
