"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ProfileAvatar } from "./ProfileAvatar";

const navItems = [
  { href: "/", label: "Dashboard" },
  { href: "/projects", label: "Projects" },
];

export function Taskbar() {
  const pathname = usePathname();

  return (
    <header className="fixed bottom-6 left-1/2 z-20 -translate-x-1/2">
      <div className="flex items-center gap-1 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[rgba(255,255,255,0.8)] px-2 py-1.5 backdrop-blur-[12px]">
        <nav className="flex items-center gap-1" aria-label="Main">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-[11px] font-medium uppercase tracking-[0.12em] transition-opacity duration-200 ${
                  active
                    ? "text-[var(--color-text)]"
                    : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute bottom-1 left-1/2 h-px w-3 -translate-x-1/2 bg-[var(--color-accent)]" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="mx-1 h-4 w-px bg-[var(--color-border)]" aria-hidden />

        <Link
          href="/contact"
          className={`px-4 py-2 text-[11px] font-medium uppercase tracking-[0.12em] transition-opacity duration-200 ${
            pathname === "/contact"
              ? "text-[var(--color-text)]"
              : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
          }`}
        >
          Contact
        </Link>

        <div className="mx-1 h-4 w-px bg-[var(--color-border)]" aria-hidden />

        <ProfileAvatar />
      </div>
    </header>
  );
}
