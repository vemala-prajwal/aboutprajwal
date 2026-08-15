"use client";

import React from "react";
import { Mail, Phone } from "lucide-react";

/** Standard GitHub Invertocat mark — sized to match Mail/Phone icons */
function GitHubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .319.216.694.825.576C20.565 21.795 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export function ContactContent() {
  const gmail = "vemalaprajwal8200@gmail.com";
  const phone = "9380753581";
  const github1 = "https://github.com/wastefello21-hub";
  const github2 = "https://github.com/vemala-prajwal";
  const github3 = "https://github.com/vemalaprajwal8200-a11y";

  return (
    <div className="contact-page">
      {/* Decorative background elements — positioned relative to the full page/viewport */}
      <div className="contact-bg-blob" aria-hidden />
      <div className="contact-decor" aria-hidden />

      {/* Centered, constrained content column */}
      <div className="contact-page__content">
        <h2 className="contact-page__heading">
          Contact Me<span className="contact-page__heading-accent">!</span>
        </h2>
        <p className="contact-page__intro">I&apos;m Vemala Prajwal — a student and AI-aware product designer.</p>

        <div className="contact-channels">
          <a className="contact-row" href={`mailto:${gmail}`}>
            <span className="contact-row__icon"><Mail size={20} /></span>
            <div>
              <div className="contact-row__label">Email</div>
              <div className="contact-row__value">{gmail}</div>
            </div>
            <span className="contact-row__arrow">→</span>
          </a>

          <a className="contact-row" href={`tel:${phone}`}>
            <span className="contact-row__icon"><Phone size={20} /></span>
            <div>
              <div className="contact-row__label">Phone</div>
              <div className="contact-row__value">{phone}</div>
            </div>
            <span className="contact-row__arrow">→</span>
          </a>

          <a className="contact-row" href={github1} target="_blank" rel="noreferrer">
            <span className="contact-row__icon"><GitHubIcon size={20} /></span>
            <div>
              <div className="contact-row__label">GitHub</div>
              <div className="contact-row__value">wastefello21-hub</div>
            </div>
            <span className="contact-row__arrow">→</span>
          </a>

          <a className="contact-row" href={github2} target="_blank" rel="noreferrer">
            <span className="contact-row__icon"><GitHubIcon size={20} /></span>
            <div>
              <div className="contact-row__label">GitHub</div>
              <div className="contact-row__value">vemala-prajwal</div>
            </div>
            <span className="contact-row__arrow">→</span>
          </a>

          <a className="contact-row" href={github3} target="_blank" rel="noreferrer">
            <span className="contact-row__icon"><GitHubIcon size={20} /></span>
            <div>
              <div className="contact-row__label">GitHub</div>
              <div className="contact-row__value">vemalaprajwal8200-a11y</div>
            </div>
            <span className="contact-row__arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
