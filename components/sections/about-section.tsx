import type { SiteContent } from "@/content/types";

type AboutSectionProps = {
  content: SiteContent;
};

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <section id="about" className="px-6 lg:px-16 py-16 lg:py-24 max-w-5xl">
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        {content.about.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
