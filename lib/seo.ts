import type { Metadata } from "next";

export const siteConfig = {
  name: "Dr. Maya Reynolds, PsyD",
  url: "https://drmayareynolds.com",
  title: "Anxiety & Trauma Therapist in Santa Monica, CA | Dr. Maya Reynolds PsyD",
  description:
    "Compassionate therapy for anxiety, trauma, burnout, and perfectionism in Santa Monica and across California through secure telehealth.",
  keywords: [
    "anxiety therapist Santa Monica",
    "trauma therapist Santa Monica",
    "psychologist Santa Monica",
    "burnout therapy Santa Monica",
    "California telehealth therapist",
    "EMDR therapist California",
    "CBT therapist Santa Monica",
  ],
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/portrait-maya.jpg",
        width: 1024,
        height: 1536,
        alt: "Dr. Maya Reynolds, PsyD — Anxiety & Trauma Therapist in Santa Monica, CA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/favicon.svg",
  },
};
