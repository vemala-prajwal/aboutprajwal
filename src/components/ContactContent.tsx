"use client";

import React from "react";
import { Mail, Phone, GitCommit } from "lucide-react";

export function ContactContent() {
  const gmail = "vemalaprajwal8200@gmail.com";
  const phone = "9380753581";
  const github1 = "https://github.com/wastefello21-hub";
  const github2 = "https://github.com/vemala-prajwal";
  const github3 = "https://github.com/vemalaprajwal8200-a11y";

  return (
    <div className="contact-page-wrap mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
      <div className="contact-bg-blob" aria-hidden />

      <div className="contact-grid">
        <aside className="contact-left">
          <h2 className="contact-headline">Contact Me!</h2>
          <p className="contact-lede">I’m Vemala Prajwal — a student and AI-aware product designer.</p>

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
              <span className="contact-row__icon"><GitCommit size={20} /></span>
              <div>
                <div className="contact-row__label">GitHub</div>
                <div className="contact-row__value">wastefello21-hub</div>
              </div>
              <span className="contact-row__arrow">→</span>
            </a>

            <a className="contact-row" href={github2} target="_blank" rel="noreferrer">
              <span className="contact-row__icon"><GitCommit size={20} /></span>
              <div>
                <div className="contact-row__label">GitHub</div>
                <div className="contact-row__value">vemala-prajwal</div>
              </div>
              <span className="contact-row__arrow">→</span>
            </a>

            <a className="contact-row" href={github3} target="_blank" rel="noreferrer">
              <span className="contact-row__icon"><GitCommit size={20} /></span>
              <div>
                <div className="contact-row__label">GitHub</div>
                <div className="contact-row__value">vemalaprajwal8200-a11y</div>
              </div>
              <span className="contact-row__arrow">→</span>
            </a>
          </div>
        </aside>

        
      </div>
                <div className="contact-decor" aria-hidden />
    </div>
  );
}
