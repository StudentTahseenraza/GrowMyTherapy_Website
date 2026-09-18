import type { Metadata } from "next";
import { MapPin, Mail, Phone } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";
import { therapist } from "@/lib/therapist";
import { contactPageContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Contact | Dr. Maya Reynolds, PsyD — Santa Monica Therapist",
  description:
    "Schedule a free 15-minute consultation with Dr. Maya Reynolds, PsyD in Santa Monica, California.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="py-16 md:py-20">
          <div className="section-shell grid lg:grid-cols-[1fr_1.3fr] gap-14">
            <div>
              <p className="eyebrow text-sm mb-4">Contact</p>
              <h1 className="font-display text-3xl sm:text-4xl leading-tight text-ink">
                {contactPageContent.headline}
              </h1>
              <p className="mt-5 text-ink/75 leading-relaxed max-w-sm">
                {contactPageContent.intro}
              </p>
              <p className="mt-5 text-ink/75 leading-relaxed max-w-sm">
                {contactPageContent.responseNote}
              </p>

              <div className="mt-10 space-y-5 border-t border-sage-100 pt-8">
                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-11 h-11 rounded-full bg-sage-100 text-sage-600 shrink-0">
                    <MapPin size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold text-ink">Santa Monica Office</p>
                    <p className="text-sm text-ink/70">{therapist.contact.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-11 h-11 rounded-full bg-sage-100 text-sage-600 shrink-0">
                    <Mail size={20} aria-hidden="true" />
                  </span>
                  <a
                    href={`mailto:${therapist.contact.email}`}
                    className="font-semibold text-ink hover:text-sage-700 self-center"
                  >
                    {therapist.contact.email}
                  </a>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-11 h-11 rounded-full bg-sage-100 text-sage-600 shrink-0">
                    <Phone size={20} aria-hidden="true" />
                  </span>
                  <a
                    href={`tel:${therapist.contact.phone}`}
                    className="font-semibold text-ink hover:text-sage-700 self-center"
                  >
                    {therapist.contact.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-card p-7 md:p-10 shadow-card">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
