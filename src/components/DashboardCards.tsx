"use client";

import type { CSSProperties } from 'react';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FolderOpen, Mail } from 'lucide-react';

const SHORT_BIO = `A student aware of AI product designer blending creativity, strategy, and AI-driven thinking to craft intuitive digital...`;

const PARTICLES = Array.from({ length: 10 }, (_, i) => i);

export default function DashboardCards() {
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLButtonElement>(null);
  const secondarySectionRef = useRef<HTMLDivElement>(null);

  // Fade the scroll cue out once user scrolls past the hero section
  useEffect(() => {
    const heroEl = heroSectionRef.current;
    const cueEl = scrollCueRef.current;
    if (!heroEl || !cueEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When hero section leaves viewport, fade cue out
        cueEl.style.opacity = entry.isIntersecting ? '' : '0';
        cueEl.style.pointerEvents = entry.isIntersecting ? '' : 'none';
      },
      { threshold: 0.3 }
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  function handleScrollCueClick() {
    secondarySectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section className="dashboard-wrap">
      <div className="dashboard-ambient" aria-hidden>
        <div className="dashboard-aurora" />
        <div className="dashboard-orb dashboard-orb--1" />
        <div className="dashboard-orb dashboard-orb--2" />
        <div className="dashboard-orb dashboard-orb--3" />
        <div className="dashboard-ring dashboard-ring--1" />
        <div className="dashboard-ring dashboard-ring--2" />
        <div className="dashboard-beam" />
        <div className="dashboard-grid-lines" />
        <span className="dashboard-watermark">PORTFOLIO</span>
        <span className="dashboard-watermark dashboard-watermark--ghost">PORTFOLIO</span>
        {PARTICLES.map((i) => (
          <span
            key={i}
            className={`dashboard-particle${i % 2 === 0 ? ' dashboard-particle--alt' : ''}`}
            style={{ '--particle-i': i } as CSSProperties}
          />
        ))}
      </div>

      {/* ── DESKTOP: unified grid ── MOBILE: hero section (full viewport) */}
      <div className="dashboard-stage">
        <div className="dashboard-grid">

          {/* Hero section wrapper — on mobile becomes a full-viewport centered section */}
          <div className="dashboard-hero-section" ref={heroSectionRef}>
            <div className="dashboard-hero-card">
              <Link href="/about" className="card-wrapper card-wrapper--iam">
                <div className="card-inner card-iam">
                  <span className="card-index">01</span>
                  <Image
                    src="/projects/profile.png"
                    alt="Vemala Prajwal"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="card-iam-photo"
                    style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
                    priority
                  />
                  <div className="card-iam-scrim-top" />
                  <div className="card-iam-scrim-bottom" />

                  <div className="card-iam-header">
                    <p className="card-eyebrow">I am</p>
                    <h2 className="card-name hero-name">
                      <span className="hero-name__secondary">Vemala</span>
                      <span className="hero-name__divider" aria-hidden />
                      <span className="hero-name__primary">Prajwal</span>
                    </h2>
                  </div>

                  <div className="card-iam-footer">
                    <p className="card-body card-body-clamp">{SHORT_BIO}</p>
                    <span className="card-readmore">
                      Read more <span className="arrow">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Scroll-down cue — mobile only (hidden via CSS on desktop) */}
            <button
              ref={scrollCueRef}
              className="scroll-cue"
              aria-label="Scroll down to see more"
              onClick={handleScrollCueClick}
              type="button"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 6l5 5 5-5"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Secondary section — Projects + Contact */}
          <div className="card-stack dashboard-secondary-section" ref={secondarySectionRef}>
            <Link href="/projects" className="card-wrapper">
              <div className="card-inner card-action card-action--projects">
                <span className="card-index">02</span>
                <div className="card-action-noise" />
                <div>
                  <div className="card-icon-wrap">
                    <FolderOpen size={18} strokeWidth={1.75} className="card-icon" />
                  </div>
                  <p className="card-eyebrow">Explore</p>
                  <h3 className="card-title">My Projects</h3>
                </div>
                <span className="card-cta">View work <span className="arrow">→</span></span>
              </div>
            </Link>

            <Link href="/contact" className="card-wrapper">
              <div className="card-inner card-action card-action--contact">
                <span className="card-index">03</span>
                <div className="card-action-noise" />
                <div>
                  <div className="card-icon-wrap">
                    <Mail size={18} strokeWidth={1.75} className="card-icon" />
                  </div>
                  <p className="card-eyebrow">Get in touch</p>
                  <h3 className="card-title">Contact Me</h3>
                </div>
                <span className="card-cta">Say hello <span className="arrow">→</span></span>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
