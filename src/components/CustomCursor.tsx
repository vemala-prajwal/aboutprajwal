"use client";

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReduce) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const dotEl = dot;
    const ringEl = ring;

    let mouseX = -1000;
    let mouseY = -1000;
    let ringX = -1000;
    let ringY = -1000;
    let rafId = 0;

    function handleMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dotEl.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      dotEl.style.opacity = '1';
      ringEl.style.opacity = '0.9';
    }

    function animateRing() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ringEl.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      rafId = requestAnimationFrame(animateRing);
    }

    function handleMouseDown() {
      ringEl.classList.add('cursor-ring-active');
    }
    function handleMouseUp() {
      ringEl.classList.remove('cursor-ring-active');
    }

    function handleOver(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (target.closest('a, button, [role="button"], input, textarea')) {
        ringEl.classList.add('cursor-ring-hover');
      } else {
        ringEl.classList.remove('cursor-ring-hover');
      }
    }

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mousemove', handleOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    rafId = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mousemove', handleOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" aria-hidden />
      <div ref={ringRef} className="custom-cursor-ring" aria-hidden />
    </>
  );
}
