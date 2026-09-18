// This file backs the /clone route: a Stage-1 structural clone that
// mirrors the reference site's layout, spacing, typography pairing, and
// color palette. Copy here is original placeholder text written to match
// the reference's tone/length/format — not copied from the live site.

export const cloneContent = {
  brand: {
    name: "Conejo Valley",
    subline: "FAMILY COUNSELING",
  },
  nav: [
    { label: "About", href: "#about" },
    {
      label: "Our Team",
      href: "#team",
      children: [
        "Therapist One, LMFT",
        "Therapist Two, AMFT",
        "Therapist Three, AMFT",
        "Therapist Four, AMFT",
        "Therapist Five, AMFT",
      ],
    },
    {
      label: "Specialties",
      href: "#specialties",
      children: [
        "Dissociation",
        "Trauma",
        "Special Needs Parenting",
        "Couples",
        "Children & Teens",
        "Anxiety & Depression",
        "Adoption",
      ],
    },
    {
      label: "Methods",
      href: "#methods",
      children: ["EMDR", "Brainspotting", "Somatic Therapy", "Parts Work Therapy"],
    },
    { label: "FAQs", href: "#faqs" },
  ],
  hero: {
    eyebrow: "ONLINE & IN-PERSON COUNSELING IN NEWBURY PARK & ACROSS CA",
    headlinePlain: "Rebuild your footing on steady ground and start to",
    headlineScript: "flourish.",
    sub: "Specialized counseling for adults, couples, teens, and children to reflect, heal, and grow.",
    cta: "Book an Appointment",
  },
  hopeSection: {
    heading: "You're holding on to hope that tomorrow can look different.",
    eyebrowLead: "AT CONEJO VALLEY FAMILY COUNSELING, WE WANT TO HELP MAKE THAT HOPE REAL.",
    paragraphs: [
      "Whether you're an adult working on personal growth, processing something difficult from your past, a couple navigating a rough patch, or a parent looking for support for your child, we offer a compassionate, judgment-free space to help you find your way through.",
      "We believe what you're going through is real and worth taking seriously. Our team meets clients across Newbury Park and throughout California with an environment built for genuine connection and understanding, so you can find solid footing again and move toward something better.",
    ],
  },
  whoWeHelp: {
    heading: "Who we help",
    items: [
      {
        title: "Adults",
        blurb:
          "Feeling stuck or overextended? We help adults build clarity and resilience by working through the roots of stress, anxiety, and emotional strain.",
      },
      {
        title: "Couples",
        blurb:
          "Every relationship takes work. We help couples move through communication breakdowns and rebuild trust, connection, and intimacy.",
      },
      {
        title: "Children & Teens",
        blurb:
          "Kids need support too. We help them process big feelings, build coping skills, and feel understood, while guiding parents along the way.",
      },
    ],
  },
  quoteBanner: {
    line1: "You deserve a space where your story is heard, valued, and understood.",
    line2: "Whatever you're carrying, we're ready to carry it with you.",
  },
  expertise: {
    heading: "Our areas of",
    headingScript: "expertise",
    columns: [
      ["Dissociation", "Trauma", "Family Conflict", "Special Needs Parenting", "Depression", "Marriage"],
      ["Anxiety", "Relationships", "Children", "Teens", "Intimacy & Connection", "…and more."],
    ],
  },
  howWeWork: {
    eyebrow: "HOW WE WORK",
    heading: "We're here to make a difference.",
    paragraphs: [
      "The clients we work with are often balancing so much at once that it's hard to put themselves first. Here, your needs come first. Our team takes the time to really listen, because no two people or stories are the same — you won't find a one-size-fits-all approach here.",
      "Sometimes we'll gently challenge you to see things from a new angle; other times we'll sit with you in what you're feeling. Either way, we take the work seriously, because healing, building meaningful relationships, and finding a life that feels like yours matters.",
    ],
  },
  footer: {
    tagline: "We want getting started to feel simple. Come into our office, or meet with us virtually from anywhere in the state.",
    address: ["925 Example Dr, Suite 200 & 225", "Newbury Park, CA 91320"],
    email: "hello@example-counseling.com",
    phone: "805.555.0100",
    serviceArea: "Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark & Simi Valley",
  },
};
