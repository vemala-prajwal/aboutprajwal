"use client";

import TestimonialCarousel from './TestimonialCarousel';
import { Mail, Phone } from 'lucide-react';

function IconInstagram(props: { size?: number; strokeWidth?: number }) {
  const s = props.size ?? 18;
  const strokeWidth = props.strokeWidth ?? 1.6;
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="17.5" cy="6.5" r="0.7" fill="currentColor" />
    </svg>
  );
}

export default function AboutHero() {
  return (
    <section className="hero">
      {/* LEFT — headline + bio */}
      <div className="hero-left">
        <div className="hero-headline">
          <span className="hero-headline-sub">
            Who&apos;s <span className="hero-dot" />
          </span>
          <span className="hero-headline-main">He?</span>
        </div>

        <div className="hero-bio">
          <p className="hero-bio-lead">
            Vemala Prajwal is a student aware of AI product designer blending
            creativity, strategy, and AI-driven thinking to craft intuitive digital
            experiences. With constant learning UX/UI, accessibility, and emerging
            technologies, he transforms complex ideas into seamless user journeys
            across platforms.
          </p>
          <p className="hero-bio-body">
            Known for a sharp aesthetic, calm process, and fast-moving execution, he
            elevates every project through thoughtful systems, smarter workflows,
            and future-focused thinking. Beyond design, he shares insights through
            writing and conversations around AI, product strategy, and digital
            craft.
          </p>
        </div>
      </div>

      {/* RIGHT — contact sidebar */}
      <aside className="hero-right">
        <p className="hero-contact-label">If you like my work, contact me!</p>

        <div className="contact-list">
          <a href="mailto:vemalaprajwal8200@gmail.com" className="contact-item">
            <Mail size={16} strokeWidth={1.75} />
            <span>vemalaprajwal8200@gmail.com</span>
          </a>

          <a href="tel:+919380753581" className="contact-item">
            <Phone size={16} strokeWidth={1.75} />
            <span>+91 93807 53581</span>
          </a>

          <a
            href="https://instagram.com/nameisprajwal"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <IconInstagram size={16} strokeWidth={1.75} />
            <span>@nameisprajwal</span>
          </a>
        </div>

        <TestimonialCarousel />
      </aside>
    </section>
  );
}
