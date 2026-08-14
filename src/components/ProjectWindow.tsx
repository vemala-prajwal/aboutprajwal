"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import type { Project } from "@/content/projects";

export function ProjectWindow({ project }: { project: Project }) {
  const router = useRouter();
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = () => router.push("/projects");

  useEffect(() => {
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") router.push("/projects");
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [router]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-30 bg-[rgba(18,18,18,0.4)] backdrop-blur-[2px]"
        onClick={close}
        aria-hidden
      />

      <motion.article
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed left-1/2 top-1/2 z-40 max-h-[calc(100dvh-7rem)] w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[rgba(25,25,25,0.95)] backdrop-blur-[16px]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-title"
      >
        <header className="flex items-center justify-between border-b border-[var(--color-border)] px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
              {project.filename}
            </span>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            className="flex h-8 w-8 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-border)] text-[var(--color-text-muted)] transition-colors duration-200 hover:border-[var(--color-border-hover)] hover:text-[var(--color-text)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-accent)]"
            aria-label="Close"
          >
            x
          </button>
        </header>

        <div className="max-h-[calc(100dvh-11rem)] overflow-y-auto px-6 py-8">
          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
            {project.year} · {project.role}
          </p>
          <h1
            id="project-title"
            className="mb-4 text-2xl font-medium tracking-tight text-[var(--color-text)]"
          >
            {project.title}
          </h1>
          <p className="mb-8 text-[var(--color-text-muted)]">{project.summary}</p>

          <section className="mb-8" aria-labelledby="visual-notes">
            <div className="mb-3 flex items-center justify-between">
              <p
                id="visual-notes"
                className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-text-muted)]"
              >
                Visual notes
              </p>
              <span className="font-mono text-[10px] text-[var(--color-text-muted)]">
                placeholders
              </span>
            </div>
            <div className="grid grid-cols-[1.45fr_0.85fr] gap-3">
              <div className="aspect-[16/10] overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[rgba(0,0,0,0.16)] p-3">
                <div className="flex h-full flex-col border border-[var(--color-border)] p-2">
                  <div className="mb-3 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                    <span className="h-px w-8 bg-[var(--color-border-hover)]" />
                  </div>
                  <div className="grid flex-1 grid-cols-[0.55fr_1fr] gap-2">
                    <div className="border border-[var(--color-border)]" />
                    <div className="space-y-2">
                      <div className="h-1/3 border border-[var(--color-border)]" />
                      <div className="grid h-[calc(66.666%-0.5rem)] grid-cols-2 gap-2">
                        <div className="border border-[var(--color-border)]" />
                        <div className="border border-[var(--color-border)]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid gap-3">
                <div className="relative overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[rgba(0,0,0,0.12)] p-3">
                  <span className="absolute right-3 top-3 font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                    01
                  </span>
                  <div className="mt-5 h-1/2 border border-[var(--color-border)]" />
                </div>
                <div className="relative overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[rgba(0,0,0,0.12)] p-3">
                  <span className="absolute right-3 top-3 font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                    02
                  </span>
                  <div className="mt-5 flex gap-1.5">
                    <span className="h-8 flex-1 border border-[var(--color-border)]" />
                    <span className="h-8 flex-1 border border-[var(--color-border)]" />
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-3 text-xs text-[var(--color-text-muted)]">
              Final screens and process artifacts will live here.
            </p>
          </section>

          <div className="mb-8 space-y-4 text-sm leading-relaxed text-[var(--color-text)]">
            {project.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <ul className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-[var(--radius-sm)] border border-[var(--color-border)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--color-text-muted)]"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </motion.article>
    </>
  );
}
