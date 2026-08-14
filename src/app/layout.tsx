import type { Metadata } from "next";
import localFont from "next/font/local";
import { AppShell } from "@/components/AppShell";
import { BackgroundCanvas } from "@/components/BackgroundCanvas";
import { GrainOverlay } from "@/components/GrainOverlay";
import { profile } from "@/content/profile";
import "./globals.css";

const interTight = localFont({
  src: "../../node_modules/@fontsource-variable/inter-tight/files/inter-tight-latin-wght-normal.woff2",
  variable: "--font-inter-tight",
  display: "swap",
  weight: "100 900",
});

const jetbrainsMono = localFont({
  src: "../../node_modules/@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2",
  variable: "--font-jetbrains",
  display: "swap",
  weight: "100 800",
});

export const metadata: Metadata = {
  title: `${profile.name} — Portfolio`,
  description: profile.intro[0],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <BackgroundCanvas />
        <GrainOverlay />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
