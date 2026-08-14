import Image from "next/image";
import Link from "next/link";
import { profile } from "@/content/profile";

export function ProfileAvatar() {
  return (
    <div className="group relative">
      <Link
        href="/contact"
        className="relative block rounded-full p-0.5"
        aria-label={`Contact ${profile.name}`}
      >
        <span className="absolute inset-0 rounded-full border border-transparent transition-colors duration-200 group-hover:border-[var(--color-accent)] group-focus-within:border-[var(--color-accent)]" />
        <Image
          src={profile.avatar}
          alt={profile.name}
          width={36}
          height={36}
          className="rounded-full"
        />
        {profile.available && (
          <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full border border-[var(--color-bg)] bg-[var(--color-accent)]" />
        )}
      </Link>

      <span className="pointer-events-none invisible absolute -top-9 right-0 whitespace-nowrap rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[rgba(20,20,20,0.9)] px-2 py-1 text-[10px] uppercase tracking-[0.08em] text-[var(--color-text-muted)] opacity-0 backdrop-blur-[8px] transition-opacity duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        Say hello →
      </span>
    </div>
  );
}
