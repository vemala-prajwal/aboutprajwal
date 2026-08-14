import type { ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh pb-32 pt-16 md:pt-20">
      {children}
    </div>
  );
}
