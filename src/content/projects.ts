export type Project = {
  slug: string;
  filename: string;
  title: string;
  year: string;
  role: string;
  summary: string;
  description: string[];
  tags: string[];
  logo?: string;
  logoText?: string;
  accent?: string;
  liveUrl?: string;
  githubUrl?: string;
  chips?: string[];
  earnings?: string;
  images?: string[];
  featuresDetailed?: { label: string; text: string }[];
  status?: string;
  features?: string[];
  tech?: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    slug: "team-egb",
    filename: "team-egb",
    title: "Team EGB",
    year: "2026",
    role: "Developer",
    summary: "E-contribution platform for community fundraising.",
    description: [
      "Built an online contribution workflow to let supporters donate and track contributions.",
      "Provided an admin dashboard to view totals and manage campaigns.",
      "Implemented simple member-facing pages with secure payment integration.",
    ],
    tags: ["Web", "Payments", "Dashboard"],
    logo: "/projects/team-egb-logo.jpeg",
    images: ["/projects/egb-desktop.jpg", "/projects/team-egb-mobile.jpeg"],
    accent: "#e35d3a",
    liveUrl: "https://teamegb.vercel.app",
    githubUrl: "https://github.com/wastefello21-hub/teamegb",
    features: [
      "Online contribution & payment collection",
      "Member contribution history",
      "Admin reporting dashboard",
    ],
    tech: ["Next.js", "Stripe", "TailwindCSS"],
    link: "",
  },
  {
    slug: "rms-ladies-boutique",
    filename: "rms-ladies-boutique",
    title: "RMS Ladies Boutique",
    year: "2025",
    role: "Freelance Web Developer",
    summary: "Catalog-style storefront with WhatsApp-based ordering for a women's clothing boutique.",
    description: [
      "Designed and built a clean, mobile-first website for RMS Ladies Boutique. The site presents the product catalog in a browsable gallery and routes every inquiry to WhatsApp, letting customers ask about availability, sizing, and pricing and place orders without a full checkout.",
    ],
    tags: ["Web", "WhatsApp"],
    logo: "/projects/rms-logo.jpeg",
    images: ["/projects/rms-desktop.jpg", "/projects/rms-mobile.jpeg"],
    chips: ["Freelance", "WhatsApp Ordering"],
    earnings: "₹4,000",
    accent: "#b44e7a",
    liveUrl: "https://rmsladiesboutique.com",
    githubUrl: undefined,
    featuresDetailed: [
      {
        label: "Product Catalog",
        text: "A clean, browsable gallery of the boutique's clothing collection, organized so customers can explore products the same way they would in-store."
      },
      {
        label: "WhatsApp Ordering",
        text: "Every product and inquiry routes directly to WhatsApp, letting customers ask about availability, sizing, and pricing and place orders without a full checkout flow."
      },
      {
        label: "Mobile-First Design",
        text: "Built primarily for mobile, since most of the boutique's customers browse and order from their phones."
      },
      {
        label: "Fast, Lightweight Build",
        text: "Optimized for quick load times and simplicity, keeping the focus on the products rather than unnecessary complexity."
      }
    ],
    tech: [],
    link: "",
  },
  {
    slug: "campus-navigator",
    filename: "campus-navigator",
    title: "Campus Navigator",
    year: "2026",
    role: "Personal Project",
    summary: "Built for students, by students.",
    description: [
      "An interactive campus map for Nitte Meenakshi Institute of Technology, built to help students, staff, and visitors find their way across campus effortlessly — from lecture halls and labs to canteens and admin blocks."
    ],
    tags: ["Campus", "Maps"],
    logo: undefined,
    images: ["/projects/cn-desktop.jpg", "/projects/cn-mobile.jpeg"],
    chips: ["Personal Project"],
    earnings: undefined,
    accent: "#2aa879",
    liveUrl: "https://collage-navigator-client.vercel.app/",
    githubUrl: "https://github.com/vemala-prajwal/collage-navigator",
    status: "in-progress",
    featuresDetailed: [
      { label: "Campus-Wide Search", text: "Find any building, department, or landmark across NMIT's campus instantly." },
      { label: "Built for Everyone", text: "Designed to help students, staff, and first-time visitors navigate the campus with equal ease." },
      { label: "Live Route Tracking", text: "Get clear directions across campus in real time, rather than relying on static maps." }
    ],
    tech: [],
    link: "",
  },
  {
    slug: "portfolio-website",
    filename: "portfolio-website",
    title: "Portfolio Website",
    year: "2026",
    role: "Personal Project",
    summary: "This site — designed and built from scratch.",
    description: [
      "A personal portfolio site built from the ground up with HTML, CSS, and JavaScript — designed to introduce who I am beyond just a list of projects. It brings together an introduction, education, skills, interests, and hobbies alongside my work, with a layout and visual style shaped to feel personal and considered rather than generic."
    ],
    tags: ["Web", "Personal"],
    logo: undefined,
    logoText: "Portfolio",
    images: ["/projects/p-desktop.jpg", "/projects/p-mobile.jpeg"],
    chips: ["Personal Project"],
    earnings: undefined,
    accent: "#6c5ce7",
    liveUrl: "https://portfolio-egb-developers.vercel.app/",
    githubUrl: "https://github.com/vemala-prajwal/Portfolio-EGB_developers",
    status: "in-progress",
    featuresDetailed: [
      { label: "No Templates", text: "Built entirely from scratch in HTML, CSS, and JavaScript — every layout and interaction is custom." },
      { label: "Personal & Project Sections", text: "Brings together an introduction, education, skills, and hobbies alongside a dedicated showcase for projects like this one." },
      { label: "Responsive by Design", text: "Built mobile-first and tested across breakpoints, not adapted after the fact." }
    ],
    tech: [],
    link: "",
  },
  {
    slug: "atlas-dashboard",
    filename: "atlas-dashboard.fig",
    title: "Atlas Dashboard",
    year: "2024",
    role: "Lead Designer",
    summary: "Analytics workspace for a B2B logistics platform.",
    description: [
      "Redesigned the primary dashboard used by operations teams to track shipments across 12 regions.",
      "Introduced a modular widget system that reduced time-to-insight by consolidating five separate views.",
      "Worked closely with engineering to ship a token-based design system alongside the UI refresh.",
    ],
    tags: ["Product design", "Design systems", "Data viz"],
  },
  {
    slug: "meridian-app",
    filename: "meridian-app.fig",
    title: "Meridian",
    year: "2023 — 2024",
    role: "Design & Frontend",
    summary: "Personal finance app with a focus on calm, readable interfaces.",
    description: [
      "Built the mobile-first experience from wireframes through production React Native screens.",
      "Designed a typographic hierarchy that made dense financial data feel approachable.",
      "Shipped onboarding flows that improved activation by 18% in the first release cycle.",
    ],
    tags: ["Mobile", "React Native", "Fintech"],
  },
  {
    slug: "studio-site",
    filename: "studio-site.fig",
    title: "Studio Site",
    year: "2023",
    role: "Creative Developer",
    summary: "Marketing site for an independent architecture studio.",
    description: [
      "Developed a scroll-driven portfolio with custom WebGL transitions between project galleries.",
      "Collaborated with the studio on art direction — restrained motion, large type, generous whitespace.",
      "Achieved 95+ Lighthouse scores while maintaining rich visual detail.",
    ],
    tags: ["WebGL", "Creative dev", "Branding"],
  },
  {
    slug: "flow-kit",
    filename: "flow-kit.fig",
    title: "Flow Kit",
    year: "2022 — 2023",
    role: "Design Systems",
    summary: "Open-source component library for internal tools.",
    description: [
      "Documented and shipped 40+ components with accessibility and theming baked in from the start.",
      "Reduced design-to-dev handoff time by standardizing patterns across three product teams.",
      "Published usage guidelines and contribution docs adopted company-wide.",
    ],
    tags: ["Design systems", "React", "Documentation"],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
