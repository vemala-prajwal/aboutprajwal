export const profile = {
  name: "Alex Morgan",
  title: "Product Designer & Developer",
  email: "hello@alexmorgan.dev",
  avatar: "/avatar.svg",
  available: true,
  intro: [
    "I design and build digital products with a focus on clarity and restraint.",
    "Currently exploring the overlap between systems thinking and interface craft.",
    "Based in Mumbai, open to remote collaboration.",
  ],
  education: [
    {
      institution: "National Institute of Design",
      degree: "B.Des, Interaction Design",
      years: "2018 — 2022",
    },
    {
      institution: "Self-directed study",
      degree: "Frontend engineering & design systems",
      years: "2022 — present",
    },
  ],
  skills: {
    Design: ["UI/UX", "Design systems", "Prototyping", "Visual design"],
    Tools: ["Figma", "Framer", "React", "TypeScript", "Next.js"],
    Interests: ["Typography", "Creative coding", "Minimal interfaces"],
  },
  hobbies: [
    {
      name: "Film photography",
      description: "Shooting on 35mm, mostly street and architecture.",
    },
    {
      name: "Long-form reading",
      description: "Essays on technology, design history, and urban planning.",
    },
    {
      name: "Morning runs",
      description: "A quiet hour before the day starts.",
    },
  ],
  social: {
    linkedin: "https://linkedin.com/in/alexmorgan",
    github: "https://github.com/alexmorgan",
  },
} as const;
