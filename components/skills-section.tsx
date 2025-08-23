"use client";

import { SectionTitle, SkillsCard } from "@/components/ui";
import { Code, GraduationCap, Palette, Smartphone } from "lucide-react";

export function SkillsSection() {
  const development = ["TypeScript", "React", "Tailwind", "Playwright"];
  const design = ["Shadcn", "MaterialUI", "Figma", "Storybook"];
  const tools = ["GitHub", "Fullstory", "Auth0", "AWS"];
  const education = [
    "M.S. Computer Science",
    "B.S. Computer Science",
    "Interactive Media & Game Development Minor",
    "Worcester Polytechnic Institute Class of 2024",
  ];

  return (
    <section id="skills" className="px-4 py-8 md:py-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="My Background" />
        <div className="grid md:grid-cols-3 gap-8">
          <SkillsCard title="Development" icon={Code} items={development} />
          <SkillsCard title="Design" icon={Palette} items={design} />
          <SkillsCard title="Tools" icon={Smartphone} items={tools} />
          <SkillsCard
            title="Education"
            icon={GraduationCap}
            items={education}
            className="md:col-span-3"
          />
        </div>
      </div>
    </section>
  );
}
