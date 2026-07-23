import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import type React from "react";

import { AnimatedBackground } from "@/components/index";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Jenna Tripoli",
  description: "Front-end software engineer portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}
    >
      <body>
        <AnimatedBackground />
        {children}
      </body>
    </html>
  );
}
