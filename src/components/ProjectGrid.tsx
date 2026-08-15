"use client";

import ProjectCard from './ProjectCard';

const PROJECTS = [
  { slug: 'team-egb', title: 'Team EGB', category: 'E-Contribution Website', image: '/projects/team-egb-logo.jpg' },
  { slug: 'rms-ladies-boutique', title: 'RMS Ladies Boutique', category: 'E-Commerce Boutique Website', image: '/projects/rms-logo.jpeg' },
  { slug: 'campus-navigator', title: 'Campus Navigator', category: '2026 · In Progress', image: '/projects/cn-desktop.jpg', status: 'in progress' },
  { slug: 'portfolio-website', title: 'Portfolio Website', category: '2026 · In Progress', image: '/projects/p-desktop.jpg', status: 'in progress' },
];

export default function ProjectsGrid() {
  return (
    <section className="projects-wrap">
      <div className="projects-heading-row">
        <h1 className="projects-heading">Projects</h1>
        <span className="projects-heading-dot" />
      </div>

      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
