"use client";

import Link from 'next/link';
import Image from 'next/image';
import { FolderOpen, Mail } from 'lucide-react';

const SHORT_BIO = `A short line about who you are and what you do. Replace this with your real, longer bio.`;

export default function DashboardCards() {
  return (
    <section className="dashboard-wrap">
      <div className="dashboard-grid">
        {/* LEFT HALF — I am, full-bleed photo, header top / bio bottom */}
        <div className="card card-iam">
          <Image
            src="/profile-placeholder.svg"
            alt="Profile photo"
            fill
            className="card-iam-photo"
            style={{ objectFit: 'cover' }}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAKAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAj/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
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
            <Link href="/about" className="card-readmore">
              Read more →
            </Link>
          </div>
        </div>

        {/* RIGHT HALF — Projects + Contact stacked */}
        <div className="card-stack">
          <Link href="/projects" className="card-link">
            <div className="card card-action">
              <div>
                <FolderOpen size={18} strokeWidth={1.75} className="card-icon" />
                <p className="card-eyebrow">Explore</p>
                <h3 className="card-title">My Projects</h3>
              </div>
              <span className="card-cta">View work <span className="arrow">→</span></span>
            </div>
          </Link>

          <Link href="/contact" className="card-link">
            <div className="card card-action">
              <div>
                <Mail size={18} strokeWidth={1.75} className="card-icon" />
                <p className="card-eyebrow">Get in touch</p>
                <h3 className="card-title">Contact Me</h3>
              </div>
              <span className="card-cta">Say hello <span className="arrow">→</span></span>
            </div>
          </Link>
        </div>
      </div>

      {/* Read more now navigates to /about */}
    </section>
  );
}
