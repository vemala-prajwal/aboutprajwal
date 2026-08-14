"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function DashboardCards() {
  return (
    <section className="dashboard-grid">
      {/* CARD 1 — I am */}
      <div className="card card-iam">
        <div className="card-iam-header">
          <p className="card-eyebrow">I am</p>
          <h2 className="card-name">Your Name</h2>
        </div>

        <div className="card-avatar">
          <Image
            src="/profile-placeholder.jpg"
            alt="Profile photo"
            width={140}
            height={140}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </div>

        <p className="card-body">A short line about who you are and what you do.</p>
      </div>

      {/* Row: My Projects + Contact Me side by side */}
      <div className="card-row">
        <Link href="/projects" className="card-link">
          <div className="card card-action">
            <div>
              <p className="card-eyebrow">Explore</p>
              <h3 className="card-title">My Projects</h3>
            </div>
            <span className="card-cta">View work →</span>
          </div>
        </Link>

        <Link href="/contact" className="card-link">
          <div className="card card-action">
            <div>
              <p className="card-eyebrow">Get in touch</p>
              <h3 className="card-title">Contact Me</h3>
            </div>
            <span className="card-cta">Say hello →</span>
          </div>
        </Link>
      </div>
    </section>
  );
}
