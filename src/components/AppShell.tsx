"use client";

import { ReactNode } from "react";
import { BackgroundCanvas } from "./BackgroundCanvas";
import { CustomCursor } from "./CustomCursor";
import { GrainOverlay } from "./GrainOverlay";
import { Taskbar } from "./Taskbar";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <>
      <BackgroundCanvas />
      <GrainOverlay />
      <CustomCursor />
      <Taskbar />
      <main className="relative z-10">{children}</main>
    </>
  );
}
