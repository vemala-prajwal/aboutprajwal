"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, useCallback } from "react";
import type { Project } from "@/content/projects";

export function ProjectWindow({ project }: { project: Project }) {
  const router = useRouter();
  const closeRef = useRef<HTMLButtonElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [imageAspects, setImageAspects] = useState<Record<number, string>>({});

  const close = () => router.push("/projects");

  useEffect(() => {
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (lightboxIndex !== null) setLightboxIndex(null);
        else router.push("/projects");
      }

      if (event.key === "ArrowRight" && lightboxIndex !== null) {
        setLightboxIndex((i) => (i === null ? null : Math.min((project.images?.length ?? 1) - 1, i + 1)));
      }
      if (event.key === "ArrowLeft" && lightboxIndex !== null) {
        setLightboxIndex((i) => (i === null ? null : Math.max(0, i - 1)));
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [router]);

  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    const onScroll = () => setScrolled(el.scrollTop > 8);
    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const trapFocus = useCallback((e: KeyboardEvent) => {
    if (e.key !== "Tab") return;
    const container = document.querySelector('[role="dialog"]');
    if (!container) return;
    const focusable = Array.from(container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    )).filter(Boolean);
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", trapFocus);
    return () => window.removeEventListener("keydown", trapFocus);
  }, [trapFocus]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-30 project-panel-backdrop"
        onClick={close}
        aria-hidden
      />

      <div className="fixed inset-0 z-40 flex items-center justify-center p-0 md:p-6 pointer-events-none">
        <motion.article
          initial={{ opacity: 0, scale: 0.97, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 12 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto project-panel w-full h-[100dvh] md:h-auto md:max-h-[88vh] md:max-w-4xl"
          style={{ ['--color-accent' as any]: project.accent ?? undefined }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-title"
          onClick={(e) => e.stopPropagation()}
        >
        <header className={`project-panel-header ${scrolled ? "sticky" : ""}`}>
          <div>
            <div className="eyebrow">{project.filename?.toUpperCase()}</div>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            className="close-btn"
            aria-label="Close project details"
          >
            <span>&times;</span>
          </button>
        </header>

        <div ref={bodyRef} className="project-panel-body" onClick={(e) => e.stopPropagation()}>
          <div className="project-window-logo" aria-hidden>
            {project.logo ? (
              <Image src={project.logo} alt={project.title} width={64} height={64} style={{ objectFit: "cover", borderRadius: "var(--radius-md)" }} />
            ) : project.logoText ? (
              <div className="logo-placeholder--text" aria-hidden>{project.logoText.toUpperCase()}</div>
            ) : (
              <div className="logo-placeholder" aria-hidden>
                {project.title.split(' ').map((s) => s[0]).slice(0,2).join('').toUpperCase()}
              </div>
            )}
          </div>

          <div className="project-metadata">
            <div className="muted">{project.year}</div>
            <span className="dot" />
            <div className="muted">{project.role}</div>
          </div>

          <h1 id="project-title" className="project-title">{project.title}</h1>
          {project.status && (
            <div className="status-badge" aria-hidden style={{ marginTop: 8 }}>
              <span className="status-badge__dot" />
              <span>{project.status === 'in-progress' ? 'IN PROGRESS' : project.status.toUpperCase()}</span>
            </div>
          )}

          <p className="project-lede">{project.summary}</p>

          {/* Chips (metadata) */}
          {(project.chips || project.earnings) && (
            <div style={{ marginBottom: '12px' }}>
              {project.chips?.map((c) => (
                <span key={c} className="chip">{c}</span>
              ))}
              {project.earnings ? (
                <span className="chip accent">{project.earnings} earned</span>
              ) : null}
            </div>
          )}

          {/* Link buttons (Live site + GitHub) */}
          {(project.liveUrl || project.githubUrl) && (
            <div className="link-buttons">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-link"
                  aria-label={`Visit ${project.title} live site (opens in new tab)`}
                >
                  <span className="icon" aria-hidden>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </span>
                  <span>Live Site</span>
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary-link"
                  aria-label={`View ${project.title} source on GitHub (opens in new tab)`}
                >
                  <span className="icon" aria-hidden>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
                      <path d="M12 .5C5.73.5.9 5.33.9 11.6c0 4.78 3.09 8.83 7.39 10.26.54.1.74-.23.74-.51 0-.25-.01-.92-.01-1.8-3.01.66-3.64-1.45-3.64-1.45-.49-1.25-1.2-1.58-1.2-1.58-.98-.67.07-.66.07-.66 1.08.08 1.65 1.12 1.65 1.12.96 1.65 2.51 1.17 3.12.9.1-.7.38-1.17.69-1.44-2.4-.27-4.93-1.2-4.93-5.34 0-1.18.42-2.14 1.12-2.9-.11-.28-.49-1.42.11-2.96 0 0 .9-.29 2.95 1.1a10.3 10.3 0 0 1 2.68-.36c.91 0 1.83.12 2.68.36 2.05-1.39 2.95-1.1 2.95-1.1.6 1.54.22 2.68.11 2.96.7.76 1.12 1.72 1.12 2.9 0 4.15-2.54 5.07-4.96 5.34.39.34.73 1.02.73 2.06 0 1.48-.01 2.67-.01 3.03 0 .28.2.61.75.51 4.3-1.43 7.39-5.48 7.39-10.26C23.1 5.33 18.27.5 12 .5z" />
                    </svg>
                  </span>
                  <span>GitHub</span>
                </a>
              )}
            </div>
          )}


          <section aria-labelledby="visual-notes">
            <div className="visual-header">
              <p id="visual-notes" className="eyebrow muted">Visual notes</p>
              <div className="tab-group" role="tablist" aria-hidden>
                <div className="tab active">Previews</div>
              </div>
            </div>

            {project.images && project.images.length === 2 ? (
              <div className={`screenshot-grid two-cols`}>
                <div className="two-cols-left">
                  <div
                    className="screenshot-card"
                    role="button"
                    tabIndex={0}
                    onClick={() => setLightboxIndex(0)}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setLightboxIndex(0); }}
                    style={ imageAspects[0] ? { aspectRatio: imageAspects[0], width: '100%' } : { width: '100%' }}
                  >
                    <Image
                      src={project.images[0]}
                      alt={`${project.title} — desktop preview`}
                      width={1200}
                      height={800}
                      sizes="(max-width: 768px) 100vw, 60vw"
                      style={{ objectFit: 'contain', width: '100%', height: '100%', background: 'var(--color-bg-elevated)' }}
                      onLoad={(e) => {
                        try {
                          const img = e.currentTarget as HTMLImageElement;
                          const w = img.naturalWidth;
                          const h = img.naturalHeight;
                          if (w && h) setImageAspects((s) => ({ ...s, 0: `${w} / ${h}` }));
                        } catch (err) { }
                      }}
                    />
                  </div>

                  <div className="feature-area">
                    <p className="screenshot-caption">Final screens and process artifacts will live here.</p>

                    <div className="feature-list">
                      {(() => {
                        const items = (project as any).featuresDetailed
                          ? (project as any).featuresDetailed
                          : (project.features ?? []).map((f) => ({ label: f.split(' ').slice(0,2).join(' ').replace(/[^A-Za-z]/g,'').toUpperCase(), text: f }));

                        return items.map((fi: any, idx: number) => (
                          <div key={fi.label + idx} className="feature-item" style={{ animationDelay: `${idx * 80}ms` }}>
                            <div className="feature-num">{String(idx+1).padStart(2,'0')}</div>
                            <div className="feature-meta">
                              <div className="feature-label">{fi.label.toUpperCase()}</div>
                              <div className="feature-desc">{fi.text}</div>
                            </div>
                          </div>
                        ));
                      })()}
                    </div>
                  </div>
                </div>

                <div className="two-cols-right">
                  <div
                    className="screenshot-card"
                    role="button"
                    tabIndex={0}
                    onClick={() => setLightboxIndex(1)}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setLightboxIndex(1); }}
                    style={ imageAspects[1] ? { aspectRatio: imageAspects[1], width: '100%', height: '100%' } : { width: '100%' }}
                  >
                    <Image
                      src={project.images[1]}
                      alt={`${project.title} — mobile preview`}
                      width={400}
                      height={900}
                      sizes="(max-width: 768px) 100vw, 35vw"
                      style={{ objectFit: 'contain', width: '100%', height: '100%', background: 'var(--color-bg-elevated)' }}
                      onLoad={(e) => {
                        try {
                          const img = e.currentTarget as HTMLImageElement;
                          const w = img.naturalWidth;
                          const h = img.naturalHeight;
                          if (w && h) setImageAspects((s) => ({ ...s, 1: `${w} / ${h}` }));
                        } catch (err) { }
                      }}
                    />
                  </div>
                </div>
              </div>
            ) : project.images && project.images.length === 0 ? (
              <div className="screenshot-placeholder">Screenshots coming soon.</div>
            ) : project.images && project.images.length > 0 ? (
              <div className={`screenshot-grid ${project.images.length === 2 ? 'two-cols' : ''}`}>
                {project.images.map((src, idx) => (
                  <div
                    key={src}
                    className="screenshot-card"
                    role="button"
                    tabIndex={0}
                    onClick={() => setLightboxIndex(idx)}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setLightboxIndex(idx); }}
                    style={ imageAspects[idx] ? { aspectRatio: imageAspects[idx], width: '100%' } : { width: '100%' } }
                  >
                    <Image
                      src={src}
                      alt={`${project.title} — preview ${idx + 1}`}
                      width={900}
                      height={600}
                      style={{ objectFit: 'contain', width: '100%', height: '100%', background: 'var(--color-bg-elevated)' }}
                      onLoad={(e) => {
                        try {
                          const img = e.currentTarget as HTMLImageElement;
                          const w = img.naturalWidth;
                          const h = img.naturalHeight;
                          if (w && h) setImageAspects((s) => ({ ...s, [idx]: `${w} / ${h}` }));
                        } catch (err) { /* ignore */ }
                      }}
                    />
                  </div>
                ))}
              </div>
            ) : null}
          </section>

          <div className="project-description mb-8">
            {project.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          

          {project.tech && project.tech.length > 0 && (
            <div className="project-window-block">
              <p className="project-window-label">Built with</p>
              <div className="project-window-tags">
                {project.tech.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer" className="project-window-link">
              Visit site →
            </a>
          )}

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
      </div>
      {lightboxIndex !== null && project.images && (
        <div className="lightbox-backdrop" role="dialog" aria-modal="true" onClick={() => setLightboxIndex(null)}>
          <button aria-label="Close preview" className="close-btn" style={{ position: 'absolute', right: 24, top: 24, zIndex: 62 }} onClick={() => setLightboxIndex(null)}>×</button>
          <div onClick={(e) => e.stopPropagation()} style={{ position: 'relative' }}>
            <Image src={project.images[lightboxIndex]} alt={`${project.title} — large preview`} width={1600} height={1000} className="lightbox-image" />
            <div className="lightbox-nav">
              <button
                aria-label="Previous image"
                className="lightbox-arrow left"
                onClick={() => setLightboxIndex((i) => (i === null ? null : Math.max(0, i - 1)))}
              >
                ‹
              </button>
              <button
                aria-label="Next image"
                className="lightbox-arrow right"
                onClick={() => setLightboxIndex((i) => (i === null ? null : Math.min((project.images!.length) - 1, i + 1)))}
              >
                ›
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
