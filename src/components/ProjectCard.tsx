'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

type Project = {
  slug: string;
  title: string;
  category: string;
  image: string;
  status?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  const router = useRouter();

  return (
    <button
      type="button"
      className="project-card"
      onClick={() => router.push(`/projects/${project.slug}`)}
    >
      {project.status && (
        <span className="status-badge" aria-hidden>
          <span className="status-badge__dot" />
          {project.status.toUpperCase()}
        </span>
      )}
      <div className="project-card-visual">
        <div className="paper-layer paper-layer-left" />
        <div className="paper-layer paper-layer-right" />
        <div className="project-visual-front">
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>

      <div className="project-card-body">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-category">{project.category}</p>
      </div>
    </button>
  );
}
