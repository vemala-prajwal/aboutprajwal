"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ringRaf = 0;
    let ringX = -100;
    let ringY = -100;
    let targetX = -100;
    let targetY = -100;

    const setVisible = (visible: boolean) => {
      if (dotRef.current) dotRef.current.style.opacity = visible ? "1" : "0";
      if (ringRef.current) ringRef.current.style.opacity = visible ? "0.4" : "0";
    };

    const moveRing = () => {
      ringX += (targetX - ringX) * 0.16;
      ringY += (targetY - ringY) * 0.16;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }

      if (Math.abs(targetX - ringX) > 0.1 || Math.abs(targetY - ringY) > 0.1) {
        ringRaf = requestAnimationFrame(moveRing);
      } else {
        ringRaf = 0;
      }
    };

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
      }

      if (!ringRaf) ringRaf = requestAnimationFrame(moveRing);
    };

    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    document.body.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(ringRaf);
      window.removeEventListener("mousemove", onMove);
      document.body.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden opacity-0 transition-opacity duration-200 md:block"
        style={{
          transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)",
        }}
      >
        <div className="h-1.5 w-1.5 rounded-full bg-[var(--color-text)]" />
      </div>
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[99] hidden opacity-0 transition-opacity duration-200 md:block"
        style={{
          transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)",
        }}
      >
        <div className="h-6 w-6 rounded-full border border-[var(--color-text)]" />
      </div>
    </>
  );
}
