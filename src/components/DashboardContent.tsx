import Image from "next/image";
import { profile } from "@/content/profile";

export function DashboardContent() {
  return (
    <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
      <section className="grid gap-8 border-b border-[var(--color-border)] pb-16 pt-8 lg:grid-cols-12 lg:items-start lg:gap-8">
        <div className="shrink-0 lg:col-span-2 lg:pt-2">
          <div className="inline-block rounded-full border border-[var(--color-border)] p-1">
            <Image
              src={profile.avatar}
              alt={profile.name}
              width={112}
              height={112}
              className="rounded-full"
              priority
            />
          </div>
        </div>
        <div className="lg:col-span-8 lg:col-start-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
            Profile
          </p>
          <h1 className="mt-4 max-w-3xl text-5xl font-medium leading-[0.92] tracking-[-0.055em] text-[var(--color-text)] md:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-6 text-base text-[var(--color-text-muted)] md:text-lg">
            {profile.title}
          </p>
        </div>
      </section>

      <section className="grid gap-4 border-b border-[var(--color-border)] py-16 lg:grid-cols-12 lg:gap-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-text-muted)] lg:col-span-2">
          About
        </p>
        <div className="max-w-2xl space-y-4 text-lg leading-relaxed text-[var(--color-text)] lg:col-span-7 lg:col-start-4">
          {profile.intro.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </section>

      <section className="grid gap-8 border-b border-[var(--color-border)] py-16 lg:grid-cols-12">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-text-muted)] lg:col-span-2">
          Education
        </p>
        <ul className="border-l border-[var(--color-border)] lg:col-span-7 lg:col-start-4">
          {profile.education.map((item) => (
            <li
              key={item.institution}
              className="relative border-b border-[var(--color-border)] py-6 pl-6 first:pt-0 last:border-0 last:pb-0"
            >
              <span
                aria-hidden
                className="absolute -left-[5px] top-0 h-2 w-2 rounded-full border border-[var(--color-accent)] bg-[var(--color-bg)]"
              />
              <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between md:gap-8">
                <div>
                  <p className="text-[var(--color-text)]">{item.institution}</p>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    {item.degree}
                  </p>
                </div>
                <p className="font-mono text-xs text-[var(--color-text-muted)]">
                  {item.years}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="grid gap-8 border-b border-[var(--color-border)] py-16 lg:grid-cols-12">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-text-muted)] lg:col-span-2">
          Skills & Interests
        </p>
        <div className="lg:col-span-7 lg:col-start-4">
          {Object.entries(profile.skills).map(([category, items]) => (
            <div
              key={category}
              className="grid gap-4 border-b border-[var(--color-border)] py-6 first:pt-0 last:border-0 last:pb-0 md:grid-cols-[8rem_minmax(0,1fr)]"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                {category}
              </p>
              <ul className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-[var(--radius-sm)] border border-[var(--color-border)] px-2 py-1 text-sm text-[var(--color-text)]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 py-16 lg:grid-cols-12">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-text-muted)] lg:col-span-2">
          Outside work
        </p>
        <ul className="lg:col-span-7 lg:col-start-4">
          {profile.hobbies.map((hobby) => (
            <li
              key={hobby.name}
              className="grid gap-2 border-b border-[var(--color-border)] py-6 first:pt-0 last:border-0 last:pb-0 sm:grid-cols-[11rem_minmax(0,1fr)]"
            >
              <p className="text-[var(--color-text)]">{hobby.name}</p>
              <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                {hobby.description}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
