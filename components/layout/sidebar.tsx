"use client";

import { FileUser, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

import { Avatar, AvatarImage } from "@/components/ui";
import type { SiteContent, SocialKey } from "@/content/types";
import { cn } from "@/lib/utils";

const socialIcons: Record<SocialKey, typeof Github> = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
};

type SidebarProps = {
  content: SiteContent;
};

export function Sidebar({ content }: SidebarProps) {
  const [activeSection, setActiveSection] = useState(content.nav[0]?.sectionId);

  useEffect(() => {
    const sections = content.nav
      .map((item) => document.getElementById(item.sectionId))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [content.nav]);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-96 lg:flex-col lg:justify-between px-6 py-12 lg:px-12 lg:py-16">
      <div>
        <Avatar className="size-20 mb-6 border-2 border-primary/30">
          <AvatarImage src={content.person.photo} alt={content.person.name} />
        </Avatar>
        <h1 className="font-heading font-bold text-3xl lg:text-4xl text-foreground">
          {content.person.name}
        </h1>
        <p className="font-heading font-medium text-lg text-primary mt-1">
          {content.person.title}
        </p>

        <nav className="hidden lg:block mt-12">
          <ul className="space-y-4">
            {content.nav.map((item) => (
              <li key={item.sectionId}>
                <a
                  href={`#${item.sectionId}`}
                  className={cn(
                    "group flex items-center gap-3 text-sm font-medium uppercase tracking-widest transition-colors",
                    activeSection === item.sectionId
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <span
                    className={cn(
                      "h-px transition-all",
                      activeSection === item.sectionId
                        ? "w-10 bg-primary"
                        : "w-5 bg-muted-foreground group-hover:w-10 group-hover:bg-foreground",
                    )}
                  />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex gap-5 mt-10 lg:mt-0">
        {content.socials.map((social) => {
          const Icon = socialIcons[social.key as SocialKey];
          return (
            <a
              key={social.key}
              href={social.href}
              target={social.key === "email" ? undefined : "_blank"}
              rel="noreferrer"
              aria-label={social.label}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon className="size-5" />
            </a>
          );
        })}
        <a
          href={content.person.resume}
          target="_blank"
          rel="noreferrer"
          aria-label="Resume"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <FileUser className="size-5" />
        </a>
      </div>
    </header>
  );
}
