"use client";

import { useEffect, useRef } from "react";

function noise(x: number, y: number, t: number) {
  return (
    Math.sin(x * 0.003 + t * 0.0004) * 0.5 +
    Math.sin(y * 0.004 - t * 0.0003) * 0.5 +
    Math.sin((x + y) * 0.002 + t * 0.0002) * 0.3
  );
}

export function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reducedMotion = motionQuery.matches;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return;
      mouseRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 12,
        y: (e.clientY / window.innerHeight - 0.5) * 12,
      };
    };

    const pause = () => {
      pausedRef.current = true;
      cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);

    const start = performance.now();

    const draw = (now: number) => {
      if (pausedRef.current) return;

      const t = reducedMotion ? 0 : now - start;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const px = mouseRef.current.x;
      const py = mouseRef.current.y;

      ctx.fillStyle = "#121212";
      ctx.fillRect(0, 0, w, h);

      const blobs = [
        { cx: 0.25, cy: 0.35, r: 0.55, color: "rgba(30, 32, 28, 0.9)" },
        { cx: 0.72, cy: 0.28, r: 0.45, color: "rgba(22, 24, 26, 0.85)" },
        { cx: 0.55, cy: 0.75, r: 0.5, color: "rgba(18, 20, 22, 0.8)" },
        { cx: 0.15, cy: 0.78, r: 0.35, color: "rgba(139, 168, 136, 0.04)" },
      ];

      for (const blob of blobs) {
        const drift = reducedMotion
          ? 0
          : noise(blob.cx * w, blob.cy * h, t) * 24;
        const x = blob.cx * w + px + drift;
        const y = blob.cy * h + py - drift * 0.5;
        const radius = blob.r * Math.max(w, h);

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(1, "rgba(18, 18, 18, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, w, h);
      }

      if (!reducedMotion) {
        rafRef.current = requestAnimationFrame(draw);
      }
    };

    const resume = () => {
      pausedRef.current = false;

      if (!reducedMotion && !rafRef.current) {
        rafRef.current = requestAnimationFrame(draw);
      }
    };

    const onVisibility = () => {
      if (document.hidden) {
        pause();
      } else if (document.hasFocus()) {
        resume();
      }
    };

    const onMotionChange = (event: MediaQueryListEvent) => {
      reducedMotion = event.matches;

      if (reducedMotion) {
        pause();
        pausedRef.current = false;
        draw(performance.now());
      } else if (!document.hidden && document.hasFocus()) {
        resume();
      }
    };

    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("blur", pause);
    window.addEventListener("focus", resume);
    motionQuery.addEventListener("change", onMotionChange);

    pausedRef.current = document.hidden || !document.hasFocus();
    draw(start);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("blur", pause);
      window.removeEventListener("focus", resume);
      motionQuery.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
