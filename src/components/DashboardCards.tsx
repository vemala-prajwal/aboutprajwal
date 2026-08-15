"use client";

import type { CSSProperties } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FolderOpen, Mail } from 'lucide-react';

const SHORT_BIO = `A short line about who you are and what you do. Replace this with your real, longer bio.`;

const PARTICLES = Array.from({ length: 10 }, (_, i) => i);

export default function DashboardCards() {
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

      <div className="dashboard-stage">
        <div className="dashboard-grid">
          {/* LEFT HALF — I am, full-bleed photo, header top / bio bottom */}
          <Link href="/about" className="card card-iam">
            <span className="card-index">01</span>
            <Image
              src="/profile.jpg"
              alt="Alex Morgan"
              fill
              className="card-iam-photo"
              style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
              priority
            />
            <div className="card-iam-scrim-top" />
            <div className="card-iam-scrim-bottom" />

            <div className="card-iam-header">
              <p className="card-eyebrow">I am</p>
              <h2 className="card-name">Your Name</h2>
            </div>

            <div className="card-iam-footer">
              <p className="card-body card-body-clamp">{SHORT_BIO}</p>
              <span className="card-readmore">
                Read more →
              </span>
            </div>
          </Link>

          {/* RIGHT HALF — Projects + Contact stacked */}
          <div className="card-stack">
            <Link href="/projects" className="card-link">
              <div className="card card-action card-action--projects">
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

            <Link href="/contact" className="card-link">
              <div className="card card-action card-action--contact">
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
