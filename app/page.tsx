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
    "@graph": [
      {
        "@type": "Psychologist",
        "@id": "https://drmayareynolds.com/#psychologist",
        name: therapist.name,
        description:
          "Anxiety and trauma therapist in Santa Monica, California, offering in-person and telehealth sessions for adults.",
        image: "https://drmayareynolds.com/images/portrait-maya.jpg",
        url: "https://drmayareynolds.com",
        telephone: therapist.contact.phone,
        email: therapist.contact.email,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "123th Street 45 W",
          addressLocality: "Santa Monica",
          addressRegion: "CA",
          postalCode: "90401",
          addressCountry: "US",
        },
        areaServed: [
          { "@type": "State", name: "California" },
          { "@type": "City", name: "Santa Monica" },
        ],
        medicalSpecialty: ["Anxiety", "Trauma", "Burnout", "Perfectionism"],
        founder: {
          "@type": "Person",
          name: therapist.name,
          jobTitle: "Licensed Clinical Psychologist",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://drmayareynolds.com/#business",
        name: "Dr. Maya Reynolds, PsyD",
        image: "https://drmayareynolds.com/images/portrait-maya.jpg",
        url: "https://drmayareynolds.com",
        telephone: therapist.contact.phone,
        email: therapist.contact.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: "123th Street 45 W",
          addressLocality: "Santa Monica",
          addressRegion: "CA",
          postalCode: "90401",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 34.0195,
          longitude: -118.4912,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
      },
    ],
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