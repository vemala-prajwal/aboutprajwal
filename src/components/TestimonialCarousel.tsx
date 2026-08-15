"use client";

import { useState } from 'react';

const QUOTES = [
  {
    text: 'A genuinely thoughtful designer — sharp instincts, clean process, and someone who elevates every project they touch.',
    attr: 'Someone, Their Title at Company',
  },
  {
    text: 'Reliable, fast, and always brings a point of view. Exactly who you want in the room for a hard design problem.',
    attr: 'Someone Else, Their Title',
  },
  {
    text: 'One of the sharpest product design instincts I\u2019ve worked with — calm under pressure, always shipping.',
    attr: 'A Third Person, Their Title',
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const active = QUOTES[index];

  return (
    <div className="hero-quote-wrap" role="region" aria-label="Testimonials">
      <blockquote className="hero-quote" key={index}>
        “{active.text}”
        <footer className="hero-quote-attr">— {active.attr}</footer>
      </blockquote>

      <div className="hero-quote-dots" aria-hidden>
        {QUOTES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Show testimonial ${i + 1}`}
            className={`hero-dot-btn ${i === index ? 'is-active' : ''}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
