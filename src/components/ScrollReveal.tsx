"use client";

import { useEffect } from "react";

export default function ScrollReveal({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const els = Array.from(document.querySelectorAll(".reveal"));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-revealed");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });

    els.forEach((el) => io.observe(el));
    observers.push(io);

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return <>{children}</>;
}
