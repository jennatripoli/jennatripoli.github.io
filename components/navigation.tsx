"use client";

import { NavigationButton } from "@/components/ui";

export function Navigation() {
  return (
    <nav className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-cyan-100 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h2 className="font-heading font-bold text-xl text-cyan-800">
          <a href="#about">JT</a>
        </h2>
        <div className="flex gap-4 md:gap-x-8">
          <NavigationButton title="Skills" link="#skills" />
          <NavigationButton title="Projects" link="#projects" />
          <NavigationButton title="Experience" link="#experience" />
        </div>
      </div>
    </nav>
  );
}
