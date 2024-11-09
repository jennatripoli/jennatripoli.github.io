import {
  LinkedInIcon,
  EmailIcon,
  JavaScriptIcon,
  ReactIcon,
  TailwindIcon,
  JavaIcon,
  PythonIcon,
  SQLIcon,
  AWSIcon,
  GitHubIcon,
} from "../icons";

export const About = () => {
  return (
    <section id="about" className="max-w-5xl mx-auto p-8 space-y-12 text-white">
      <p className="text-lg lg:text-2xl">
        I am a{" "}
        <span className="font-extrabold">full-stack software engineer</span>{" "}
        with passions for web development, robotics, and video games. I pride
        myself on my love of learning and attention to detail with everything
        that I work on.
      </p>
      <div className="flex flex-row flex-wrap gap-4 items-center justify-center">
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 place-items-center">
        <p className="font-title pb-2 text-4xl lg:pb-6 lg:text-6xl">
          Education
        </p>
        <div className="col-span-2 text-base text-center lg:text-left w-full">
          <p>M.S. Computer Science</p>
          <p>B.S. Computer Science</p>
          <p>Interactive Media & Game Dev. Minor</p>
          <p>Graduated in May 2024 with High Distinction</p>
          <p>from Worcester Polytechnic Institute</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 place-items-center">
        <p className="font-title pb-2 text-4xl lg:pb-6 lg:text-6xl">
          Favorite Tech
        </p>
        <div className="col-span-2 w-full flex flex-row flex-wrap justify-center lg:justify-start gap-4 fill-white">
          <Tech title="JavaScript" icon={JavaScriptIcon} />
          <Tech title="React" icon={ReactIcon} />
          <Tech title="Tailwind" icon={TailwindIcon} />
          <Tech title="Java" icon={JavaIcon} />
          <Tech title="Python" icon={PythonIcon} />
          <Tech title="SQL" icon={SQLIcon} />
          <Tech title="AWS" icon={AWSIcon} />
          <Tech title="GitHub" icon={GitHubIcon} />
        </div>
      </div>
    </section>
  );
};

interface TechProps {
  title: string;
  icon: React.ElementType;
}

interface LinkProps {
  title: string;
  icon?: React.ElementType;
  href: string;
}

const Tech: React.FC<TechProps> = ({ title, icon: Icon }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Icon />
      <p className="text-base">{title}</p>
    </div>
  );
};

const Link: React.FC<LinkProps> = ({ title, icon: Icon, href }) => {
  return (
    <a
      className={`fill-[#7D8491] text-[#7D8491] hover:fill-[#212129] hover:text-[#212129] hover:scale-110 transition-all duration-200 bg-white h-10 p-2 flex items-center justify-center ${
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
