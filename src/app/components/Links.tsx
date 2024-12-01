import { LinkedInIcon, GitHubIcon, EmailIcon } from "../icons";

export const Links = ({ className }: { className?: string }) => {
  return (
    <div
      className={` ${className} flex flex-row flex-wrap gap-4 items-center justify-center`}
    >
      <Link
        title="LinkedIn"
        icon={LinkedInIcon}
        href="https://www.linkedin.com/in/jennatripoli/"
      />
      <Link
        title="GitHub"
        icon={GitHubIcon}
        href="https://github.com/jennatripoli"
      />

      <Link
        title="Email"
        icon={EmailIcon}
        href="mailto:jennatripoli02@gmail.com"
      />
      <Link title="Resume" href="/docs/Jenna_Tripoli_Resume.pdf" />
    </div>
  );
};

interface LinkProps {
  title: string;
  icon?: React.ElementType;
  href: string;
}

const Link: React.FC<LinkProps> = ({ title, icon: Icon, href }) => {
  return (
    <a
      className={`fill-white text-white hover:scale-110 transition-all duration-200 bg-[#4d4d4d] h-10 p-2 flex items-center justify-center ${
        Icon ? "w-10 rounded-full" : "w-fit rounded-2xl font-bold"
      }`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {Icon ? <Icon /> : title}
    </a>
  );
};
