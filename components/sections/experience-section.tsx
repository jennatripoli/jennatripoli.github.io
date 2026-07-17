import {
  Bot,
  GraduationCap,
  Hand,
  HeartPulse,
  LucideIcon,
  MonitorSmartphone,
  Package,
} from "lucide-react";

import {
  Badge,
  Card,
  CardContent,
  SectionTitle,
  Timeline,
  TimelineItem,
} from "@/components/ui";
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
      </Timeline>
      <div className="mt-10 space-y-4">
        {content.education.map((edu) => (
          <Card
            key={edu.institution}
            className="hover:border-primary/40 transition-colors"
          >
            <CardContent className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center justify-center size-10 rounded-full border border-border bg-background text-primary shrink-0">
                <GraduationCap className="size-5" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-primary uppercase tracking-wide">
                  {edu.period}
                </p>
                <h3 className="font-heading font-bold text-lg text-foreground mt-1">
                  {edu.institution}
                </h3>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {edu.degrees.map((degree) => (
                    <Badge key={degree} variant="secondary" className="text-xs">
                      {degree}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
