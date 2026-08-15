"use client";

import { useEffect, useRef } from 'react';

export default function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const canvasEl = canvas;
    const context = ctx;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let dots: { x: number; y: number }[] = [];
    const spacing = 36;
    const mouse = { x: -9999, y: -9999 };
    let animationId = 0;
    let glowT = 0;

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvasEl.width = width * dpr;
      canvasEl.height = height * dpr;
      canvasEl.style.width = width + 'px';
      canvasEl.style.height = height + 'px';
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      dots = [];
      for (let x = spacing / 2; x < width; x += spacing) {
        for (let y = spacing / 2; y < height; y += spacing) {
          dots.push({ x, y });
        }
      }
    }

    function draw() {
      context.clearRect(0, 0, width, height);

      // base fill
      context.fillStyle = '#FAFAF8';
      context.fillRect(0, 0, width, height);

      // slow drifting glow
      glowT += 0.0025;
      const glowX = width * 0.5 + Math.sin(glowT) * width * 0.3;
      const glowY = height * 0.5 + Math.cos(glowT * 0.8) * height * 0.3;
      const glowRadius = Math.max(width, height) * 0.45;
      const gradient = context.createRadialGradient(
        glowX, glowY, 0,
        glowX, glowY, glowRadius
      );
      gradient.addColorStop(0, 'rgba(201,166,107,0.06)'); // accent glow
      gradient.addColorStop(1, 'rgba(201,166,107,0)');
      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);

      // dot grid, brightens near cursor
      const reactRadius = 140;
      for (const dot of dots) {
        const dx = dot.x - mouse.x;
        const dy = dot.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let t = 0;
        if (dist < reactRadius) {
          t = 1 - dist / reactRadius;
          t = t * t; // ease
        }
        const alpha = 0.10 + t * 0.35;
        const radius = 1.5 + t * 1.5;

        context.beginPath();
        context.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(0,0,0,${alpha})`;
        context.fill();
      }

      if (!reducedMotion) {
        animationId = requestAnimationFrame(draw);
      }
    }

    function handleMouseMove(e: MouseEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    function handleVisibility() {
      if (document.hidden) {
        cancelAnimationFrame(animationId);
      } else if (!reducedMotion) {
        animationId = requestAnimationFrame(draw);
      }
    }

    resize();
    draw(); // draw at least one frame immediately, even with reduced motion

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        display: 'block',
      }}
    />
  );
}
