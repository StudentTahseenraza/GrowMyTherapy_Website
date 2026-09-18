import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import TrustBar from "@/components/trust-bar";
import About from "@/components/about";
import Services from "@/components/services";
import TherapyApproach from "@/components/therapy-approach";
import WhoWeHelp from "@/components/who-we-help";
import OfficeSection from "@/components/office-section";
import Faq from "@/components/faq";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { therapist } from "@/lib/therapist";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Psychologist",
    name: therapist.name,
    description:
      "Anxiety and trauma therapist in Santa Monica, California, offering in-person and telehealth sessions for adults.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123th Street 45 W",
      addressLocality: "Santa Monica",
      addressRegion: "CA",
      postalCode: "90401",
      addressCountry: "US",
    },
    areaServed: "California",
    telephone: therapist.contact.phone,
    email: therapist.contact.email,
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <TherapyApproach />
        <WhoWeHelp />
        <OfficeSection />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
