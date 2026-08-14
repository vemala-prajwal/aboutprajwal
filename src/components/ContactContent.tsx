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
    <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
      <header className="grid gap-4 border-b border-[var(--color-border)] pb-12 pt-8 lg:grid-cols-12 lg:gap-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-text-muted)] lg:col-span-2">
          Contact
        </p>
        <div className="lg:col-span-7 lg:col-start-4">
          <h1 className="text-5xl font-medium leading-none tracking-[-0.05em] text-[var(--color-text)] md:text-6xl">
            {profile.name}
          </h1>
          <a
            href={`mailto:${profile.email}`}
            className="mt-6 inline-block text-[var(--color-accent)] underline decoration-[var(--color-accent)]/30 underline-offset-4 transition-opacity duration-200 hover:opacity-80"
          >
            {profile.email}
          </a>
        </div>
      </header>

      <section className="grid gap-8 border-b border-[var(--color-border)] py-16 lg:grid-cols-12">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-text-muted)] lg:col-span-2">
          Links
        </p>
        <ul className="space-y-4 lg:col-span-7 lg:col-start-4">
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

      <section className="grid gap-8 py-16 lg:grid-cols-12">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-text-muted)] lg:col-span-2">
          Send a message
        </p>

        {submitted ? (
          <p className="max-w-xl text-sm leading-relaxed text-[var(--color-text-muted)] lg:col-span-7 lg:col-start-4">
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
          <form onSubmit={handleSubmit} className="max-w-xl space-y-8 lg:col-span-7 lg:col-start-4">
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
                className="w-full rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-transparent px-4 py-2 text-sm text-[var(--color-text)] outline-none transition-colors duration-200 focus:border-[var(--color-accent)]"
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
                className="w-full rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-transparent px-4 py-2 text-sm text-[var(--color-text)] outline-none transition-colors duration-200 focus:border-[var(--color-accent)]"
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
                className="w-full resize-none rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-transparent px-4 py-2 text-sm text-[var(--color-text)] outline-none transition-colors duration-200 focus:border-[var(--color-accent)]"
              />
            </div>
            <button
              type="submit"
              className="rounded-[var(--radius-sm)] border border-[var(--color-border)] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--color-text)] transition-colors duration-200 hover:border-[var(--color-accent)]"
            >
              Send
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
