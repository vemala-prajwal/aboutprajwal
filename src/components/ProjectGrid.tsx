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
    <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
      <header className="grid gap-4 border-b border-[var(--color-border)] pb-12 pt-8 lg:grid-cols-12 lg:gap-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-text-muted)] lg:col-span-2">
          File explorer
        </p>
        <h1 className="text-5xl font-medium leading-none tracking-[-0.05em] text-[var(--color-text)] md:text-6xl lg:col-span-8 lg:col-start-4">
          Projects
        </h1>
      </header>

      <ul className="grid grid-cols-2 gap-x-4 gap-y-8 py-12 sm:grid-cols-3 md:grid-cols-4 md:gap-x-8 md:gap-y-12 lg:grid-cols-5">
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
                className={`group flex min-h-32 w-full flex-col items-center justify-center gap-4 rounded-[var(--radius-md)] p-4 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-accent)] ${
                  isSelected
                    ? "bg-[rgba(242,242,240,0.04)] ring-1 ring-[var(--color-border-hover)]"
                    : "hover:bg-[rgba(242,242,240,0.02)]"
                }`}
              >
                <FolderIcon
                  selected={isSelected}
                  className="h-14 w-14 transition-opacity duration-200 group-hover:opacity-100"
                />
                <span className="max-w-full truncate text-center font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--color-text-muted)] group-hover:text-[var(--color-text)]">
                  {project.filename}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <p className="hidden font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-text-muted)] md:block">
        Double-click or press Enter to open. Single click selects.
      </p>
    </div>
  );
}
