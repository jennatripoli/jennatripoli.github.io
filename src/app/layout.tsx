import type { Metadata } from "next";
import { AnimatedCircles } from "./components/AnimatedCircles";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jenna Tripoli",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased text-center bg-gradient-to-b from-[#212129] to-[#4c5265] bg-fixed min-h-screen font-body space-y-48">
        {children}
      </body>
      <AnimatedCircles />
    </html>
  );
}
