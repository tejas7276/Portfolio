import type React from "react"; 
import type { Metadata, Viewport } from "next";
import {
  Geist,
  Geist_Mono,
  Poppins,
  Playfair_Display,
  Space_Grotesk,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import SmoothScroll from "../components/smooth-scroll";

// ---- FONTS ----
const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _poppins = Poppins({
  weight: ["300", "400", "600", "700", "800"],
  subsets: ["latin"],
});
const _playfair = Playfair_Display({
  weight: ["700", "800"],
  subsets: ["latin"],
});
const _spaceGrotesk = Space_Grotesk({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

// ---- METADATA ----
export const metadata: Metadata = {
  title: "Tejas Shinde - Fullstack Developer Portfolio",
  description:
    "Cinematic portfolio of Tejas Shinde, a Java Full Stack Developer skilled in React, Spring Boot, Angular, Hibernate, and MySQL.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.png", type: "image/png", sizes: "192x192" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.png", type: "image/png", sizes: "16x16" },
    ],
    apple: "/favicon.png",
  },
};

// ---- VIEWPORT ----
export const viewport: Viewport = {
  themeColor: "#0f172a",
};

// ---- ROOT LAYOUT ----
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`font-sans antialiased bg-background text-foreground ${_poppins.className}`}
      >
        <SmoothScroll />

        {/* Wrapper for smooth scroll */}
        <div id="smooth-wrapper">
          <div id="smooth-content">{children}</div>
        </div>

        <Analytics />
      </body>
    </html>
  );
}
