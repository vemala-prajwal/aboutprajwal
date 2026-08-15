import Link from 'next/link';

const SOCIALS = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourname' },
  { label: 'GitHub', href: 'https://github.com/yourname' },
  { label: 'Spotify', href: 'https://open.spotify.com/user/yourname' },
  { label: 'Calendly', href: 'https://calendly.com/yourname' },
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
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="hero-social-box"
              aria-label={s.label}
            >
              {s.label.charAt(0)}
            </a>
          ))}
        </div>

        <blockquote className="hero-quote">
          “A genuinely thoughtful designer — sharp instincts, clean process,
          and someone who elevates every project they touch.”
          <footer className="hero-quote-attr">
            — Someone, Their Title at Company
          </footer>
        </blockquote>
      </aside>
    </section>
  );
}
