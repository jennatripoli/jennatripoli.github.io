import {
  Bot,
  GraduationCap,
  Hand,
  HeartPulse,
  LucideIcon,
  MonitorSmartphone,
  Package,
} from "lucide-react";

import { Badge, SectionTitle, Timeline, TimelineItem } from "@/components/ui";
import type { ExperienceIcon, SiteContent } from "@/content/types";

const experienceIcons: Record<ExperienceIcon, LucideIcon> = {
  bot: Bot,
  package: Package,
  hand: Hand,
  "monitor-smartphone": MonitorSmartphone,
  "heart-pulse": HeartPulse,
};

type ExperienceSectionProps = {
  content: SiteContent;
};

export function ExperienceSection({ content }: ExperienceSectionProps) {
  return (
    <section id="experience" className="px-6 lg:px-16 py-16 lg:py-24 max-w-5xl">
      <SectionTitle title="Experience" />
      <Timeline>
        {content.experience.map((exp) => (
          <TimelineItem
            key={`${exp.company}-${exp.period}`}
            icon={experienceIcons[exp.icon]}
            period={exp.period}
            title={`${exp.role} · ${exp.company}`}
          >
            <ul className="space-y-2 list-disc list-outside ml-4 marker:text-primary">
              {exp.description.map((item, key) => (
                <li
                  key={key}
                  className="text-muted-foreground leading-relaxed text-sm pl-1"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {exp.tech.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </TimelineItem>
        ))}
        {content.education.map((edu) => (
          <TimelineItem
            key={edu.institution}
            icon={GraduationCap}
            period={edu.period}
            title={edu.institution}
          >
            <ul className="space-y-2 list-disc list-outside ml-4 marker:text-primary">
              {edu.degrees.map((degree, key) => (
                <li
                  key={key}
                  className="text-muted-foreground leading-relaxed text-sm pl-1"
                >
                  {degree}
                </li>
              ))}
            </ul>
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  );
}
