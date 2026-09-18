import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import TeamProfile from "@/components/team-profile";
import InlineCta from "@/components/inline-cta";
import { team } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Our Team | Dr. Maya Reynolds, PsyD — Santa Monica Therapist",
  description:
    "Meet Dr. Maya Reynolds, PsyD, licensed clinical psychologist in Santa Monica, California.",
};

export default function TeamPage() {
  // A single, dedicated clinician gets the full profile treatment directly —
  // no thin "listing" page in between. If the practice grows, the grid
  // below (currently unused) picks up automatically once team.length > 1.
  if (team.length === 1) {
    return (
      <>
        <Navbar />
        <main id="main-content">
          <TeamProfile member={team[0]} />
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="py-16 md:py-20">
          <div className="section-shell max-w-2xl">
            <p className="eyebrow text-sm mb-4">Meet your therapist</p>
            <h1 className="font-display text-3xl sm:text-4xl leading-tight text-ink">
              Our Team
            </h1>
          </div>

          <div className="section-shell mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <Link
                key={member.slug}
                href={`/team/${member.slug}`}
                className="group bg-white rounded-card overflow-hidden shadow-card hover:scale-[1.02] transition-transform"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={member.photo}
                    alt={`Portrait of ${member.name}`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 320px, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-display text-lg text-ink">
                    {member.name}
                  </h2>
                  <p className="text-sm text-sage-700 mt-1">
                    {member.credentialLine}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sage-700 group-hover:gap-3 transition-all">
                    View profile <ArrowRight size={14} aria-hidden="true" />
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
