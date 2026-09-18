export interface TeamMember {
  slug: string;
  name: string;
  credentialLine: string;
  photo: string;
  heroQuote: string;
  intro: string[];
  specialties: string[];
  modalities: string[];
  secondQuote: string;
  bio: string[];
  personalFaqs: { question: string; answer: string }[];
}

export const team: TeamMember[] = [
  {
    slug: "maya-reynolds",
    name: "Dr. Maya Reynolds, PsyD",
    credentialLine: "Licensed Clinical Psychologist, PsyD",
    photo: "/images/portrait-maya.jpg",
    heroQuote:
      "A space to understand your whole self — mind and body — not just manage symptoms.",
    intro: [
      "You might be here because anxiety, panic, or racing thoughts have started to feel like too much to carry alone. Maybe you look \u201cfunctional\u201d from the outside while quietly bracing for something to go wrong on the inside.",
      "Or maybe something from your past keeps showing up in your relationships, your confidence, or your sense of safety — and you're ready for it to stop running the show.",
    ],
    specialties: [
      "Anxiety, panic, and constant worry",
      "Single-incident and complex, long-standing trauma",
      "Professional burnout and emotional exhaustion",
      "Perfectionism and high internal pressure",
      "High-achieving entrepreneurs, creatives, and professionals",
    ],
    modalities: [
      "Cognitive Behavioral Therapy (CBT)",
      "EMDR (Eye Movement Desensitization and Reprocessing)",
      "Mindfulness-Based Practices",
      "Body-Oriented / Somatic Techniques",
    ],
    secondQuote:
      "Healing works best when it addresses both the emotional and physiological sides of what you're carrying.",
    bio: [
      "I'm a licensed clinical psychologist based in Santa Monica, California, working with adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of my clients are high-achieving and self-aware, but internally exhausted, stuck in overthinking, or emotionally on edge.",
      "My approach is warm, collaborative, and grounded — structured enough to feel supportive, with plenty of room for reflection and depth. I integrate CBT, EMDR, mindfulness-based practices, and body-oriented techniques to work with both the emotional and physiological sides of what you're experiencing.",
      "Trauma work is a core part of my practice. I work with adults navigating both single-incident trauma and more complex, long-standing patterns rooted in childhood, relationships, or chronic stress — always at a pace that prioritizes safety and stabilization first.",
      "I also frequently support entrepreneurs, creatives, and professionals dealing with burnout, perfectionism, and high internal pressure — many of whom feel disconnected from themselves after years of pushing through stress. Therapy becomes a space to slow down, reconnect, and build more sustainable ways of living and working.",
      "I offer both in-person sessions from my Santa Monica office and secure telehealth for clients anywhere in California. My goal isn't just symptom relief — it's helping you build insight, resilience, and a stronger relationship with yourself over time.",
    ],
    personalFaqs: [
      {
        question: "What led you to become a therapist?",
        answer:
          "I've always been drawn to the connection between the emotional and physiological sides of stress — how the body holds what the mind is still processing. That curiosity, paired with wanting to help people beyond a surface level, led me toward clinical psychology.",
      },
      {
        question: "How would you describe your style in session?",
        answer:
          "Warm and collaborative, but structured. I want sessions to feel supportive and safe, while still making space for real reflection and depth — not just checking in on symptoms.",
      },
      {
        question: "Who do you enjoy working with most?",
        answer:
          "Thoughtful, self-aware adults who are ready to look beneath the surface — especially people who've felt unseen in past therapy experiences or who are managing more than they let on.",
      },
      {
        question: "What's one thing you want new clients to know?",
        answer:
          "That therapy isn't about being fixed. It's about being understood, and slowly building a steadier relationship with yourself — at a pace that actually feels safe.",
      },
    ],
  },
];

export interface SpecialtyPage {
  slug: string;
  navLabel: string;
  title: string;
  heroLine1: string;
  heroHighlight: string;
  heroImage: string;
  eyebrow: string;
  intro: string;
  body: string[];
  relatedFaqSlugs: string[];
}

export const specialtyPages: SpecialtyPage[] = [
  {
    slug: "anxiety-therapy-santa-monica",
    navLabel: "Anxiety",
    title: "Anxiety Therapy in Santa Monica",
    heroLine1: "Quiet the noise & find your",
    heroHighlight: "calm.",
    heroImage: "/images/office-2.jpg",
    eyebrow: "Specialties",
    intro:
      "Racing thoughts, a tight chest, a mind that won't quiet down at 2 a.m. — anxiety can make even ordinary days feel unmanageable.",
    body: [
      "If you're living with constant worry, panic, or a nervous system that feels like it's always bracing for something to go wrong, you're not alone — and you're not broken. Many of the adults I work with look calm and capable on the outside while quietly managing racing thoughts, tension, or trouble sleeping on the inside.",
      "Together, we'll use cognitive-behavioral therapy (CBT) and mindfulness-based practices to help you understand what's actually driving your anxiety — and build practical tools you can use in the moments that matter, not just in session.",
      "This work is collaborative and paced to your comfort. The goal isn't to eliminate every worry; it's to build a calmer, steadier relationship with your own mind.",
    ],
    relatedFaqSlugs: [
      "Do you offer anxiety therapy in Santa Monica?",
      "What happens during the first therapy session?",
    ],
  },
  {
    slug: "trauma-therapy-santa-monica",
    navLabel: "Trauma",
    title: "Trauma Therapy in Santa Monica",
    heroLine1: "Lift the weight & find your",
    heroHighlight: "footing.",
    heroImage: "/images/office-1.jpg",
    eyebrow: "Specialties",
    intro:
      "Past experiences don't have to keep running the show in your relationships, confidence, or sense of safety.",
    body: [
      "I work with adults navigating both single-incident trauma and more complex, long-standing patterns that may stem from childhood, past relationships, or chronic stress. This work is paced carefully, with an emphasis on safety and stabilization first — not reliving every detail before you're ready.",
      "Using EMDR (Eye Movement Desensitization and Reprocessing) alongside body-oriented techniques, we help your nervous system process what happened so it carries less emotional charge in the present.",
      "The aim is to help you feel more regulated in daily life — not just during our sessions — so you can move through the world with less bracing for impact.",
    ],
    relatedFaqSlugs: [
      "What is EMDR therapy?",
      "What happens during the first therapy session?",
    ],
  },
  {
    slug: "burnout-perfectionism-therapy-santa-monica",
    navLabel: "Burnout & Perfectionism",
    title: "Burnout & Perfectionism Therapy in Santa Monica",
    heroLine1: "Set the pressure down & rediscover",
    heroHighlight: "balance.",
    heroImage: "/images/office-2.jpg",
    eyebrow: "Specialties",
    intro:
      "For the high achievers who are running on empty: this work is about untangling your worth from your output.",
    body: [
      "I frequently work with entrepreneurs, creatives, and professionals who feel disconnected from themselves after years of pushing through stress. From the outside, everything looks fine. On the inside, there's exhaustion, a constant hum of pressure, and the sense that slowing down isn't an option.",
      "Therapy becomes a space to slow down, reconnect with what actually matters to you, and explore where the pressure to always perform comes from in the first place.",
      "We'll work together to build more sustainable ways of living and working — ones that don't require sacrificing your wellbeing to keep up.",
    ],
    relatedFaqSlugs: [
      "Do you work with burnout and perfectionism?",
      "Is therapy confidential?",
    ],
  },
];

export interface MethodPage {
  slug: string;
  navLabel: string;
  title: string;
  heroLine1: string;
  heroLine2: string;
  heroHighlight: string;
  heroImage: string;
  eyebrow: string;
  intro: string;
  body: string[];
}

export const methodPages: MethodPage[] = [
  {
    slug: "cbt",
    navLabel: "CBT",
    title: "Cognitive Behavioral Therapy (CBT)",
    heroLine1: "Understand your patterns.",
    heroLine2: "Change your relationship to them.",
    heroHighlight: "patterns.",
    heroImage: "/images/office-1.jpg",
    eyebrow: "Methods",
    intro:
      "CBT helps identify the thought patterns and habits that keep anxiety, worry, and stress on repeat.",
    body: [
      "Cognitive Behavioral Therapy is one of the most well-researched, evidence-based approaches to anxiety and stress. It works by helping you notice the automatic thoughts and behaviors that quietly reinforce anxious cycles, and building more workable alternatives in their place.",
      "In our work together, CBT isn't about ignoring difficult feelings or thinking your way out of them — it's about understanding what's actually driving your anxiety, so you can respond to it differently the next time it shows up.",
      "This is often the starting point for clients who want practical tools they can use in real moments, alongside the deeper work of trauma and self-understanding.",
    ],
  },
  {
    slug: "emdr",
    navLabel: "EMDR",
    title: "EMDR Therapy",
    heroLine1: "Restore balance. Reconnect with yourself. Regain",
    heroLine2: "",
    heroHighlight: "control.",
    heroImage: "/images/office-2.jpg",
    eyebrow: "Methods",
    intro:
      "EMDR helps your brain reprocess distressing memories so they carry less emotional charge.",
    body: [
      "EMDR (Eye Movement Desensitization and Reprocessing) is an evidence-based approach that helps your brain do what it couldn't fully do at the time a difficult experience happened — process it and file it away as something that occurred in the past, rather than something still happening in the present.",
      "This is particularly effective for both single-incident trauma and more complex, long-standing patterns. It doesn't require narrating every detail of what happened out loud; the focus is on helping your nervous system move through what got stuck.",
      "We move at a pace that prioritizes your safety and stabilization first, so the work always feels manageable — never overwhelming.",
    ],
  },
  {
    slug: "mindfulness",
    navLabel: "Mindfulness-Based Therapy",
    title: "Mindfulness-Based Practices",
    heroLine1: "Come back to the present.",
    heroLine2: "One breath at a time.",
    heroHighlight: "present.",
    heroImage: "/images/office-1.jpg",
    eyebrow: "Methods",
    intro:
      "Mindfulness-based practices help interrupt the spiral of overthinking and reconnect you with the present moment.",
    body: [
      "For many clients, anxiety shows up as a mind that's constantly a few steps ahead — running through worst-case scenarios, replaying conversations, or bracing for what's next. Mindfulness-based practices offer a way to gently interrupt that pattern.",
      "Rather than a single technique, mindfulness is woven throughout our work together — a way of noticing thoughts and body sensations without immediately reacting to them, and building a little more space between a feeling and your response to it.",
      "Over time, this can create real distance from the constant hum of worry, making room for a steadier, more grounded way of moving through your day.",
    ],
  },
  {
    slug: "somatic",
    navLabel: "Body-Oriented / Somatic Therapy",
    title: "Body-Oriented & Somatic Techniques",
    heroLine1: "Your body remembers.",
    heroLine2: "Let's help it feel safe again.",
    heroHighlight: "safe",
    heroImage: "/images/office-2.jpg",
    eyebrow: "Methods",
    intro:
      "Body-oriented techniques address the physiological side of anxiety and trauma — not just the thoughts.",
    body: [
      "Anxiety and trauma don't live only in the mind — they show up in the body, too: a tight chest, shallow breathing, a nervous system stuck in overdrive. Body-oriented techniques help address that physiological side directly.",
      "This work is integrated alongside CBT and EMDR, helping you build awareness of what's happening in your body in the moment and develop tools to help your nervous system settle.",
      "The goal is a felt sense of safety and regulation — not just an intellectual understanding of what's going on, but a body that feels less braced for impact.",
    ],
  },
];

export interface ContactPageContent {
  headline: string;
  intro: string;
  responseNote: string;
}

export const contactPageContent: ContactPageContent = {
  headline: "Get in touch.",
  intro:
    "Use this form to tell me a bit about what's bringing you to therapy. I'll respond within 24 hours to schedule your free 15-minute consultation.",
  responseNote:
    "Prefer to talk first? A free 15-minute phone consultation is a low-pressure way to ask questions and see if we're a good fit.",
};

export interface FaqPageContent {
  headline: string;
  intro: string;
}

export const faqPageContent: FaqPageContent = {
  headline: "Questions?",
  intro:
    "Here are some of the most common questions I get about starting therapy. If you don't see your question answered, reach out directly.",
};
