"use client";

import { FormEvent, useState } from "react";
import { profile } from "@/content/profile";

export function ContactContent() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-xl px-6 md:px-8">
      <header className="mb-12 pt-8 md:pt-16">
        <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
          Contact
        </p>
        <h1 className="mb-4 text-3xl font-medium tracking-tight text-[var(--color-text)] md:text-4xl">
          {profile.name}
        </h1>
        <a
          href={`mailto:${profile.email}`}
          className="text-[var(--color-accent)] underline decoration-[var(--color-accent)]/30 underline-offset-4 transition-opacity duration-200 hover:opacity-80"
        >
          {profile.email}
        </a>
      </header>

      <section className="mb-12">
        <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
          Links
        </p>
        <ul className="space-y-3">
          <li>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--color-text)] underline decoration-[var(--color-border)] underline-offset-4 transition-opacity duration-200 hover:opacity-70"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--color-text)] underline decoration-[var(--color-border)] underline-offset-4 transition-opacity duration-200 hover:opacity-70"
            >
              GitHub
            </a>
          </li>
        </ul>
      </section>

      <section>
        <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
          Send a message
        </p>

        {submitted ? (
          <p className="text-sm text-[var(--color-text-muted)]">
            Your mail client should open shortly. If it doesn&apos;t, email me
            directly at{" "}
            <a
              href={`mailto:${profile.email}`}
              className="text-[var(--color-accent)] underline decoration-[var(--color-accent)]/30 underline-offset-4"
            >
              {profile.email}
            </a>
            .
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-text-muted)]"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-transparent px-3 py-2.5 text-sm text-[var(--color-text)] outline-none transition-colors duration-200 focus:border-[var(--color-border-hover)]"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-text-muted)]"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-transparent px-3 py-2.5 text-sm text-[var(--color-text)] outline-none transition-colors duration-200 focus:border-[var(--color-border-hover)]"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-text-muted)]"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full resize-none rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-transparent px-3 py-2.5 text-sm text-[var(--color-text)] outline-none transition-colors duration-200 focus:border-[var(--color-border-hover)]"
              />
            </div>
            <button
              type="submit"
              className="rounded-[var(--radius-sm)] border border-[var(--color-border)] px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--color-text)] transition-colors duration-200 hover:border-[var(--color-border-hover)]"
            >
              Send
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
