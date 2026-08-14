"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { projects } from "@/content/projects";
import { FolderIcon } from "./FolderIcon";

export function ProjectGrid() {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);

  const openProject = (slug: string) => {
    router.push(`/projects/${slug}`);
  };

  const handleClick = (slug: string) => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      openProject(slug);
      return;
    }
    setSelected(slug);
  };

  const handleDoubleClick = (slug: string) => {
    openProject(slug);
  };

  return (
    <div className="mx-auto max-w-4xl px-6 md:px-8">
      <header className="mb-12 pt-8 md:pt-16">
        <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
          File explorer
        </p>
        <h1 className="text-3xl font-medium tracking-tight text-[var(--color-text)] md:text-4xl">
          Projects
        </h1>
      </header>

      <ul className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-4">
        {projects.map((project) => {
          const isSelected = selected === project.slug;

          return (
            <li key={project.slug}>
              <button
                type="button"
                onClick={() => handleClick(project.slug)}
                onDoubleClick={() => handleDoubleClick(project.slug)}
                onFocus={() => setSelected(project.slug)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    openProject(project.slug);
                  }
                }}
                aria-pressed={isSelected}
                className={`group flex w-full flex-col items-center gap-3 rounded-[var(--radius-md)] p-4 transition-colors duration-200 ${
                  isSelected
                    ? "bg-[rgba(242,242,240,0.04)] ring-1 ring-[var(--color-border-hover)]"
                    : "hover:bg-[rgba(242,242,240,0.02)]"
                }`}
              >
                <FolderIcon
                  selected={isSelected}
                  className="h-12 w-12 transition-opacity duration-200 group-hover:opacity-100"
                />
                <span className="max-w-full truncate text-center font-mono text-[11px] text-[var(--color-text-muted)] group-hover:text-[var(--color-text)]">
                  {project.filename}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <p className="mt-12 hidden text-center text-xs text-[var(--color-text-muted)] md:block">
        Double-click or press Enter to open. Single click selects.
      </p>
    </div>
  );
}
