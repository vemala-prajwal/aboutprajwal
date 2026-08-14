"use client";

import { useEffect, useRef } from "react";

const GRID_SPACING = 36;
const IDLE_RADIUS = 1.5;
const ACTIVE_RADIUS = 3.2;
const ACTIVATION_RADIUS = 140;

type Rgba = {
  red: number;
  green: number;
  blue: number;
  alpha: number;
};

function readRgba(value: string, fallback: Rgba): Rgba {
  const channels = value.match(/[\d.]+/g)?.map(Number);

  if (!channels || channels.length < 3) return fallback;

  return {
    red: channels[0],
    green: channels[1],
    blue: channels[2],
    alpha: channels[3] ?? fallback.alpha,
  };
}

function rgba({ red, green, blue }: Rgba, alpha: number) {
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

export function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const rootStyles = getComputedStyle(document.documentElement);
    const colors = {
      background: rootStyles.getPropertyValue("--bg-base").trim() || "#131313",
      glow:
        rootStyles.getPropertyValue("--accent-glow").trim() ||
        "rgba(124, 152, 133, 0.05)",
      dotIdle: readRgba(rootStyles.getPropertyValue("--dot-idle"), {
        red: 255,
        green: 255,
        blue: 255,
        alpha: 0.12,
      }),
      dotActive: readRgba(rootStyles.getPropertyValue("--dot-active"), {
        red: 255,
        green: 255,
        blue: 255,
        alpha: 0.55,
      }),
    };
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mouse = { x: -ACTIVATION_RADIUS, y: -ACTIVATION_RADIUS };

    let width = window.innerWidth;
    let height = window.innerHeight;
    let reducedMotion = motionQuery.matches;
    let animationFrame = 0;
    let resizeFrame = 0;

    const draw = (time: number) => {
      context.fillStyle = colors.background;
      context.fillRect(0, 0, width, height);

      if (!reducedMotion) {
        const phase = (time / 38000) * Math.PI * 2;
        const glowX = width * (0.5 + Math.sin(phase) * 0.2);
        const glowY = height * (0.5 + Math.cos(phase * 0.82) * 0.18);
        const glowRadius = width * 0.4;
        const glow = context.createRadialGradient(
          glowX,
          glowY,
          0,
          glowX,
          glowY,
          glowRadius,
        );

        glow.addColorStop(0, colors.glow);
        glow.addColorStop(1, "transparent");
        context.fillStyle = glow;
        context.fillRect(0, 0, width, height);
      }

      for (let y = GRID_SPACING / 2; y <= height; y += GRID_SPACING) {
        for (let x = GRID_SPACING / 2; x <= width; x += GRID_SPACING) {
          const distance = Math.hypot(mouse.x - x, mouse.y - y);
          const falloff =
            !reducedMotion && distance < ACTIVATION_RADIUS
              ? (1 - distance / ACTIVATION_RADIUS) ** 2
              : 0;
          const opacity =
            colors.dotIdle.alpha +
            (colors.dotActive.alpha - colors.dotIdle.alpha) * falloff;
          const radius = IDLE_RADIUS + (ACTIVE_RADIUS - IDLE_RADIUS) * falloff;

          context.beginPath();
          context.arc(x, y, radius, 0, Math.PI * 2);
          context.fillStyle = rgba(colors.dotActive, opacity);
          context.fill();
        }
      }
    };

    const stopAnimation = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = 0;
    };

    const animate = (time: number) => {
      draw(time);

      if (!reducedMotion && !document.hidden) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        animationFrame = 0;
      }
    };

    const startAnimation = () => {
      if (!reducedMotion && !document.hidden && !animationFrame) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw(performance.now());
    };

    const onResize = () => {
      cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(resize);
    };

    const onMouseMove = (event: MouseEvent) => {
      if (reducedMotion) return;
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const onVisibilityChange = () => {
      if (document.hidden) {
        stopAnimation();
        return;
      }

      draw(performance.now());
      startAnimation();
    };

    const onMotionChange = (event: MediaQueryListEvent) => {
      reducedMotion = event.matches;
      mouse.x = -ACTIVATION_RADIUS;
      mouse.y = -ACTIVATION_RADIUS;
      stopAnimation();
      draw(performance.now());
      startAnimation();
    };

    resize();
    startAnimation();
    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange);
    motionQuery.addEventListener("change", onMotionChange);

    return () => {
      stopAnimation();
      cancelAnimationFrame(resizeFrame);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      motionQuery.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
