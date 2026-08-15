"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

type Project = {
  slug: string;
  title: string;
  category: string;
  images: string[];
};

const LAYER_OFFSETS = [
  { rot: -8, x: -18, y: 6 },
  { rot: 5, x: 14, y: 2 },
  { rot: 0, x: 0, y: -6 },
];

export default function ProjectCard({ project, style }: { project: Project; style?: React.CSSProperties }) {
  const router = useRouter();
  const isSingleImage = project.images.length === 1;

  return (
    <button
      type="button"
      className="project-card"
      onClick={() => router.push(`/projects/${project.slug}`)}
      style={style}
    >
      <div className="project-card-visual">
        {isSingleImage ? (
          <div className="project-visual-layer project-visual-single">
            <Image
              src={project.images[0]}
              alt={project.title}
              width={160}
              height={160}
              loading="eager"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
        ) : (
          project.images.slice(0, 3).map((img, i) => {
            const offset = LAYER_OFFSETS[i] ?? LAYER_OFFSETS[0];
            return (
              <div
                key={img}
                className="project-visual-layer"
                style={{
                  transform: `rotate(${offset.rot}deg) translate(${offset.x}px, ${offset.y}px)`,
                  zIndex: i,
                }}
              >
                <Image src={img} alt="" width={220} height={140} style={{ objectFit: "cover" }} />
              </div>
            );
          })
        )}
      </div>

      <div className="project-card-body">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-category">{project.category}</p>
      </div>
    </button>
  );
}
