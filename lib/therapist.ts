export interface Service {
  title: string;
  description: string;
  icon: "brain" | "heart-handshake" | "battery-low";
  slug: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface WhoWeHelpItem {
  title: string;
  description: string;
  icon: "wind" | "shield" | "battery-low" | "sparkles" | "cloud-rain" | "brain-circuit";
  image: string;
}

export interface ApproachStep {
  step: number;
  title: string;
  description: string;
  icon: "hand-heart" | "search" | "wrench" | "sprout";
}

export interface Testimonial {
  quote: string;
  attribution: string;
}

export const therapist = {
  name: "Dr. Maya Reynolds, PsyD",
  firstName: "Maya",
  credentials: "PsyD, Licensed Clinical Psychologist",
  location: "Santa Monica, California",
  tagline: "Anxiety & Trauma Therapist in Santa Monica, California",
  offer: [
    "In-person therapy in Santa Monica",
    "Secure Telehealth across California",
  ],
  contact: {
    phone: "(310) 555-0148",
    email: "hello@drmayareynolds.com",
    address: "123th Street 45 W, Santa Monica, CA 90401",
    consultLength: "15-minute consultation",
    ageRange: "Adults 18+",
  },
  heroTrustChips: [
    "Adults 18+",
    "In-Person Therapy",
    "California Telehealth",
    "Licensed Clinical Psychologist",
  ],
  modalities: [
    "Cognitive Behavioral Therapy (CBT)",
    "EMDR (Eye Movement Desensitization and Reprocessing)",
    "Mindfulness-Based Approaches",
    "Body-Based / Somatic Techniques",
  ],
  specialties: [
    "Anxiety, panic, and constant worry",
    "Single-incident and complex, long-standing trauma",
    "Professional burnout and emotional exhaustion",
    "Perfectionism and high internal pressure",
    "High-achieving entrepreneurs, creatives, and professionals",
  ],
  trustBar: [
    { title: "Evidence-Based CBT", icon: "brain-circuit" },
    { title: "EMDR Trauma Therapy", icon: "waves" },
    { title: "Mindfulness & Body-Based Care", icon: "leaf" },
    { title: "California Telehealth Available", icon: "monitor-smartphone" },
  ],
  services: [
    {
      title: "Anxiety Therapy in Santa Monica",
      description:
        "Racing thoughts, tight chest, a mind that won't quiet down at 2 a.m. — anxiety can make even ordinary days feel unmanageable. Together we'll use CBT and mindfulness-based tools to help you understand what's driving your anxiety and build a calmer, steadier relationship with your own mind.",
      icon: "brain",
      slug: "anxiety-therapy-santa-monica",
    },
    {
      title: "Trauma Therapy in Santa Monica",
      description:
        "Past experiences don't have to keep running the show. Using EMDR and body-based techniques, we'll work at a pace that feels safe, helping your nervous system process what happened so you can move through the world with more ease and less bracing for impact.",
      icon: "heart-handshake",
      slug: "trauma-therapy-santa-monica",
    },
    {
      title: "Burnout & Perfectionism Therapy in Santa Monica",
      description:
        "For the high achievers who are running on empty: this work is about untangling your worth from your output. We'll explore where the pressure comes from and build sustainable ways to succeed without sacrificing your wellbeing.",
      icon: "battery-low",
      slug: "burnout-perfectionism-therapy-santa-monica",
    },
  ] satisfies Service[],
  approachSteps: [
    {
      step: 1,
      title: "Feel Safe",
      description:
        "We start by building trust. Sessions are a judgment-free space where your story is heard and believed.",
      icon: "hand-heart",
    },
    {
      step: 2,
      title: "Understand Patterns",
      description:
        "Together we'll identify the thoughts, habits, and old survival strategies that keep you stuck.",
      icon: "search",
    },
    {
      step: 3,
      title: "Learn Practical Tools",
      description:
        "CBT, EMDR, and mindfulness give you concrete skills you can use in real moments, not just in session.",
      icon: "wrench",
    },
    {
      step: 4,
      title: "Build Lasting Change",
      description:
        "We track progress and adjust as you grow, so the changes you make actually stick.",
      icon: "sprout",
    },
  ] satisfies ApproachStep[],
  whoWeHelp: [
    {
      title: "Anxiety",
      description: "Support for racing thoughts, worry loops, and chronic overwhelm.",
      icon: "wind",
      image: "/images/who-we-help/anxiety.svg",
    },
    {
      title: "Trauma",
      description: "A safe, paced space to process difficult past experiences.",
      icon: "shield",
      image: "/images/who-we-help/trauma.svg",
    },
    {
      title: "Burnout",
      description: "Recover your energy without abandoning what matters to you.",
      icon: "battery-low",
      image: "/images/who-we-help/burnout.svg",
    },
    {
      title: "Perfectionism",
      description: "Loosen the grip of 'never enough' and reconnect with ease.",
      icon: "sparkles",
      image: "/images/who-we-help/perfectionism.svg",
    },
    {
      title: "Panic & Overthinking",
      description: "Understand the spiral and learn how to gently step out of it.",
      icon: "brain-circuit",
      image: "/images/who-we-help/panic-overthinking.svg",
    },
    {
      title: "Chronic Stress",
      description: "Practical, body-based tools for a nervous system stuck in overdrive.",
      icon: "cloud-rain",
      image: "/images/who-we-help/chronic-stress.svg",
    },
  ] satisfies WhoWeHelpItem[],
  office: {
    title: "A Calm Space for Healing in Santa Monica",
    subtitle:
      "My Santa Monica office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease when they arrive.",
    features: [
      "Natural light throughout the day",
      "A quiet, private office away from foot traffic",
      "Comfortable, uncluttered seating",
      "Sessions that are always confidential, always yours",
    ],
    infoCard: {
      title: "Santa Monica Office",
      lines: ["Private Sessions", "California Telehealth", "Adults 18+"],
    },
  },
  faq: [
    {
      question: "Do you offer anxiety therapy in Santa Monica?",
      answer:
        "Yes. Anxiety is one of my primary areas of focus. I work with adults throughout Santa Monica, both in-person and via telehealth, using CBT and mindfulness-based approaches tailored to your specific worries.",
    },
    {
      question: "What is EMDR therapy?",
      answer:
        "EMDR (Eye Movement Desensitization and Reprocessing) is an evidence-based approach that helps your brain reprocess distressing memories so they carry less emotional charge. It's particularly effective for trauma and can create meaningful shifts without requiring you to relive every detail out loud.",
    },
    {
      question: "Do you offer telehealth throughout California?",
      answer:
        "I do. In addition to in-person sessions in Santa Monica, I offer secure telehealth to adults anywhere in California, so you can access support from wherever you are.",
    },
    {
      question: "What happens during the first therapy session?",
      answer:
        "Our first session is a chance to get to know each other. We'll talk through what's bringing you to therapy, your history, and what you're hoping will feel different. There's no pressure to share everything at once — we go at your pace.",
    },
    {
      question: "Do you work with burnout and perfectionism?",
      answer:
        "Absolutely. I work with many high achievers, entrepreneurs, and creatives who are exhausted by the pressure to always perform. We'll work on separating your self-worth from your output and building a more sustainable way forward.",
    },
    {
      question: "How long are sessions?",
      answer:
        "Standard sessions are 50 minutes. Some clients doing EMDR work may benefit from extended sessions, which we can discuss together.",
    },
    {
      question: "Is therapy confidential?",
      answer:
        "Yes. What you share in session is confidential, with the standard legal and ethical exceptions your therapist is required to explain during your first session (such as risk of serious harm).",
    },
    {
      question: "Who is therapy for?",
      answer:
        "I work with adults 18 and older — including thoughtful high achievers, entrepreneurs, creatives, and professionals — navigating anxiety, trauma, burnout, perfectionism, or chronic overwhelm.",
    },
  ] satisfies FaqItem[],
  testimonials: [
    {
      quote:
        "I came in barely sleeping and left with actual tools I still use every day. It felt less like being fixed and more like being understood.",
      attribution: "Adult Client in California",
    },
    {
      quote:
        "For the first time, therapy didn't feel like performing wellness. I could just be a mess and figure it out from there.",
      attribution: "Adult Client in California",
    },
    {
      quote:
        "The EMDR work helped with things I didn't think talking could ever touch. I feel lighter than I have in years.",
      attribution: "Adult Client in California",
    },
  ] satisfies Testimonial[],
};

export type Therapist = typeof therapist;