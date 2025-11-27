import { Badge, Button, Card, CardContent } from "@/components/ui";
import { cn } from "@/lib/utils";
import { ExternalLink, LucideIcon } from "lucide-react";

type SectionTitleProps = {
  title: string;
};

export function SectionTitle({ title }: SectionTitleProps) {
  return (
    <h2 className="font-heading font-bold text-3xl text-center text-cyan-800 mt-4 mb-8 md:mb-16">
      {title}
    </h2>
  );
}

type SkillsCardProps = {
  title: string;
  icon: LucideIcon;
  items: string[];
  className?: string;
};

export function SkillsCard({
  title,
  icon: Icon,
  items,
  className,
}: SkillsCardProps) {
  return (
    <Card
      className={cn(
        className,
        "border-cyan-100 hover:shadow-lg transition-shadow duration-300"
      )}
    >
      <CardContent className="text-center px-4">
        <Icon className="w-12 h-12 text-pink-500 mx-auto" />
        <h3 className="font-heading font-bold text-lg text-cyan-800 mb-3">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2 justify-center">
          {items.map((item, key) => (
            <Badge
              key={key}
              variant="secondary"
              className="bg-cyan-50 text-cyan-800"
            >
              {item}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

type ProjectCardProps = {
  title: string;
  image: string;
  description: string;
  tech: string[];
  links?: { title: string; link: string }[];
};

export function ProjectCard({
  title,
  image,
  description,
  tech,
  links,
}: ProjectCardProps) {
  return (
    <Card className="border-cyan-100 hover:shadow-xl transition-all duration-300 hover:scale-102 group">
      <CardContent>
        <div className="flex items-center justify-center rounded-lg mb-4 p-1 bg-gradient-to-br from-cyan-100 to-pink-100 group-hover:from-cyan-200 group-hover:to-pink-200 transition-all duration-300">
          <img src={image} alt={title} className="w-full h-full rounded-md" />
        </div>
        <h3 className="font-heading font-bold text-lg text-cyan-800 mb-2">
          {title}
        </h3>
        <p className="text-slate-600 text-sm mb-4 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-1 mb-4">
          {tech.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="text-xs border-pink-200 text-pink-600"
            >
              {tech}
            </Badge>
          ))}
        </div>
        {links && (
          <div className="flex flex-wrap gap-2">
            {links.map(({ link, title }) => (
              <LinkButton
                key={title}
                title={title}
                icon={ExternalLink}
                link={link}
                color="pink"
              />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

type LinkButtonProps = {
  title: string;
  link: string;
  icon: LucideIcon;
  color?: "white" | "pink";
  className?: string;
};

export function LinkButton({
  title,
  link,
  icon: Icon,
  color = "white",
  className,
}: LinkButtonProps) {
  return (
    <Button
      variant="secondary"
      size="lg"
      className={cn(
        className,
        color === "white" && "bg-white text-cyan-800 hover:bg-cyan-50",
        color === "pink" && "bg-pink-500 text-white hover:bg-pink-600",
        "px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
      )}
      onClick={() => window.open(link, "_blank")}
    >
      <Icon className="w-5 h-5 mr-1" />
      {title}
    </Button>
  );
}

type NavigationButtonProps = {
  title: string;
  link: string;
};

export function NavigationButton({ title, link }: NavigationButtonProps) {
  return (
    <a
      href={link}
      className="text-slate-600 hover:text-pink-500 transition-colors"
    >
      {title}
    </a>
  );
}
