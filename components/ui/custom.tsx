import { ExternalLink, LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import { Card, CardContent } from "@/components/ui";
import { cn } from "@/lib/utils";

type SectionTitleProps = {
  title: string;
};

export function SectionTitle({ title }: SectionTitleProps) {
  return (
    <h2 className="font-heading font-bold text-2xl text-foreground mb-8 flex items-center gap-4">
      {title}
      <span className="h-px flex-1 bg-border" aria-hidden="true" />
    </h2>
  );
}

type TimelineProps = {
  children: ReactNode;
};

export function Timeline({ children }: TimelineProps) {
  return (
    <div className="relative">
      <div
        className="absolute left-5 top-5 bottom-5 w-px bg-border"
        aria-hidden="true"
      />
      <div className="space-y-10">{children}</div>
    </div>
  );
}

type TimelineItemProps = {
  icon: LucideIcon;
  period: string;
  title: string;
  children: ReactNode;
};

export function TimelineItem({
  icon: Icon,
  period,
  title,
  children,
}: TimelineItemProps) {
  return (
    <div className="relative pl-16">
      <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-full border border-border bg-card text-primary">
        <Icon className="size-5" />
      </div>
      <p className="text-sm font-medium text-primary uppercase tracking-wide">
        {period}
      </p>
      <h3 className="font-heading font-bold text-lg text-foreground mt-1">
        {title}
      </h3>
      <div className="mt-3">{children}</div>
    </div>
  );
}

type ProjectCardProps = {
  title: string;
  image: string;
  platform: "desktop" | "mobile";
  description: string;
  links?: { title: string; link: string }[];
};

export function ProjectCard({
  title,
  image,
  platform,
  description,
  links,
}: ProjectCardProps) {
  const isMobile = platform === "mobile";

  return (
    <Card className="hover:border-primary/40 transition-colors group">
      <CardContent
        className={cn(
          "flex gap-5",
          isMobile ? "flex-col sm:flex-row" : "flex-col lg:flex-row",
        )}
      >
        <div
          className={cn(
            "shrink-0 self-start overflow-hidden rounded-lg bg-secondary",
            isMobile
              ? "w-40 sm:w-48 mx-auto sm:mx-0 aspect-[9/16]"
              : "w-full max-w-2xl mx-auto aspect-video lg:w-80 lg:max-w-none lg:mx-0",
          )}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-heading font-bold text-lg text-foreground mb-2">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
            {description}
          </p>
          {links && (
            <div className="flex flex-wrap gap-2">
              {links.map(({ link, title }) => (
                <LinkButton
                  key={title}
                  title={title}
                  icon={ExternalLink}
                  link={link}
                />
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

type LinkButtonProps = {
  title: string;
  link: string;
  icon: LucideIcon;
  className?: string;
};

export function LinkButton({
  title,
  link,
  icon: Icon,
  className,
}: LinkButtonProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10 transition-colors",
        className,
      )}
    >
      <Icon className="w-4 h-4" />
      {title}
    </a>
  );
}
