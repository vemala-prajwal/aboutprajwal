"use client";

import Link from 'next/link';
import TestimonialCarousel from './TestimonialCarousel';

function IconLink(props: { size?: number; strokeWidth?: number }) {
  const s = props.size ?? 18;
  const strokeWidth = props.strokeWidth ?? 1.6;
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 14a3 3 0 0 1 0-4l3-3a3 3 0 0 1 4 4l-1 1" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 10a3 3 0 0 1 0 4l-3 3a3 3 0 0 1-4-4l1-1" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconCode(props: { size?: number; strokeWidth?: number }) {
  const s = props.size ?? 18;
  const strokeWidth = props.strokeWidth ?? 1.6;
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 18l6-6-6-6" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" transform="translate(-8,0)" />
      <path d="M8 6l-6 6 6 6" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" transform="translate(8,0)" />
    </svg>
  );
}

function IconMusic(props: { size?: number; strokeWidth?: number }) {
  const s = props.size ?? 18;
  const strokeWidth = props.strokeWidth ?? 1.6;
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 17a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" transform="translate(0,-6)" />
      <path d="M9 11V3l10 4v8" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconCalendar(props: { size?: number; strokeWidth?: number }) {
  const s = props.size ?? 18;
  const strokeWidth = props.strokeWidth ?? 1.6;
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M16 3v4M8 3v4M3 11h18" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

const SOCIALS = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourname', Icon: IconLink },
  { label: 'GitHub', href: 'https://github.com/yourname', Icon: IconCode },
  { label: 'Spotify', href: 'https://open.spotify.com/user/yourname', Icon: IconMusic },
  { label: 'Calendly', href: 'https://calendly.com/yourname', Icon: IconCalendar },
];

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
            Your Name is a modern AI-aware product designer blending
            creativity, strategy, and AI-driven thinking to craft intuitive
            digital experiences. With years of experience across UX/UI,
            accessibility, and emerging technologies, he transforms complex
            ideas into seamless user journeys across platforms.
          </p>
          <p className="hero-bio-body">
            Known for a sharp aesthetic, calm process, and fast-moving
            execution, he elevates every project through thoughtful systems,
            smarter workflows, and future-focused thinking. Beyond design, he
            shares insights through writing and conversations around AI,
            product strategy, and digital craft.{' '}
            <a href="#" className="hero-inline-link">Read more.</a>
          </p>
        </div>
      </div>

      {/* RIGHT — contact sidebar */}
      <aside className="hero-right">
        <p className="hero-contact-label">If you like my work, contact me!</p>

        <a href="mailto:you@example.com" className="hero-email">
          you@example.com
        </a>

        <a href="/resume.pdf" target="_blank" rel="noreferrer" className="hero-cv">
          Download CV
        </a>

        <div className="hero-social-row">
          {SOCIALS.map((s) => {
            const Icon = s.Icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="hero-social-box"
                aria-label={s.label}
              >
                <Icon size={18} strokeWidth={1.75} />
              </a>
            );
          })}
        </div>

        <TestimonialCarousel />
      </aside>
    </section>
  );
}
