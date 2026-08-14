export type Project = {
  slug: string;
  filename: string;
  title: string;
  year: string;
  role: string;
  summary: string;
  description: string[];
  tags: string[];
};

export const projects: Project[] = [
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
