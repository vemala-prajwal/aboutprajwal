"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Dashboard" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Taskbar() {
  const pathname = usePathname();

  return (
    <header className="fixed bottom-4 left-1/2 z-40 w-max max-w-[calc(100vw_-_1.5rem)] -translate-x-1/2 sm:bottom-6">
      <nav
        className="flex max-w-full items-center gap-0.5 rounded-full border border-[rgba(20,20,20,0.1)] bg-[rgba(250,250,248,0.84)] p-1 shadow-[0_12px_32px_rgba(20,20,20,0.12)] backdrop-blur-xl"
        aria-label="Primary navigation"
      >
        {navItems.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`inline-flex min-h-9 items-center justify-center rounded-full px-2 text-[9px] font-semibold uppercase tracking-[0.09em] no-underline transition-[background-color,color,box-shadow,transform] duration-200 sm:min-h-10 sm:px-3.5 sm:text-[10px] ${
                active
                  ? "bg-[#1a1a1a] text-white shadow-[0_2px_8px_rgba(20,20,20,0.18)]"
                  : "text-[rgba(20,20,20,0.58)] hover:-translate-y-px hover:bg-white/70 hover:text-[#1a1a1a]"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
