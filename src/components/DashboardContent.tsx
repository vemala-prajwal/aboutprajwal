import Image from "next/image";
import { profile } from "@/content/profile";

export function DashboardContent() {
  return (
    <div className="mx-auto max-w-3xl px-6 md:px-8">
      <section className="mb-20 pt-8 md:pt-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
          <div className="shrink-0">
            <Image
              src={profile.avatar}
              alt={profile.name}
              width={96}
              height={96}
              className="rounded-full border border-[var(--color-border)]"
              priority
            />
          </div>
          <div>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
              Profile
            </p>
            <h1 className="mb-3 text-4xl font-medium tracking-tight text-[var(--color-text)] md:text-5xl">
              {profile.name}
            </h1>
            <p className="text-sm text-[var(--color-text-muted)]">
              {profile.title}
            </p>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
          About
        </p>
        <div className="max-w-xl space-y-3 text-base leading-relaxed text-[var(--color-text)]">
          {profile.intro.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
          Education
        </p>
        <ul className="space-y-6">
          {profile.education.map((item) => (
            <li
              key={item.institution}
              className="border-b border-[var(--color-border)] pb-6 last:border-0"
            >
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
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

      <section className="mb-20">
        <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
          Skills & Interests
        </p>
        <div className="space-y-8">
          {Object.entries(profile.skills).map(([category, items]) => (
            <div key={category}>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                {category}
              </p>
              <ul className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-[var(--radius-sm)] border border-[var(--color-border)] px-3 py-1.5 text-sm text-[var(--color-text)]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
          Outside work
        </p>
        <ul className="space-y-5">
          {profile.hobbies.map((hobby) => (
            <li key={hobby.name}>
              <p className="text-[var(--color-text)]">{hobby.name}</p>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                {hobby.description}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
