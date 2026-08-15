"use client";

import ProjectCard from "./ProjectCard";

const PROJECTS = [
  { slug: "team-egb", title: "Team EGB", category: "E-Contribution Website", images: ["/projects/team-egb-logo.jpeg"] },
  { slug: "luma-ios-watch", title: "Luma iOS Watch", category: "Wearable Tech", images: ["/profile-placeholder.svg", "/window.svg"] },
  { slug: "onlejobs", title: "onleJobs", category: "Employment", images: ["/profile-placeholder.svg", "/window.svg"] },
  { slug: "cooperstown", title: "Cooperstown Dream Park", category: "Sports & Events", images: ["/profile-placeholder.svg", "/window.svg"] },
];

export default function ProjectGrid() {
  return (
    <section className="projects-wrap">
      <div className="projects-heading-row">
        <h1 className="projects-heading">Projects</h1>
        <span className="projects-heading-dot" />
      </div>

      <div className="projects-grid">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.slug} project={p} style={{ animationDelay: `${i * 80}ms` }} />
        ))}
      </div>
    </section>
  );
}
