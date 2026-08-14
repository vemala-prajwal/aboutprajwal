"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { BackgroundCanvas } from "./BackgroundCanvas";
import { CustomCursor } from "./CustomCursor";
import { GrainOverlay } from "./GrainOverlay";
import { Taskbar } from "./Taskbar";

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();

  return (
    <>
      <BackgroundCanvas />
      <GrainOverlay />
      <CustomCursor />
      <Taskbar />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={pathname}
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reducedMotion ? { opacity: 1 } : { opacity: 0, y: -4 }}
          transition={{ duration: reducedMotion ? 0 : 0.24, ease: "easeOut" }}
          className="relative z-10"
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </>
  );
}
