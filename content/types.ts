export type SocialKey = "github" | "linkedin" | "email";

export interface Social {
  key: SocialKey;
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  sectionId: string;
}

export interface Person {
  name: string;
  title: string;
  photo: string;
  resume: string;
}

export interface EducationEntry {
  institution: string;
  period: string;
  degrees: string[];
}

export interface ProjectLink {
  title: string;
  link: string;
}

export interface Project {
  title: string;
  image: string;
  platform: "desktop" | "mobile";
  description: string;
  links?: ProjectLink[];
}

export type ExperienceIcon =
  | "bot"
  | "package"
  | "hand"
  | "monitor-smartphone"
  | "heart-pulse";

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  icon: ExperienceIcon;
  description: string[];
  tech: string[];
}

export interface SiteContent {
  person: Person;
  socials: Social[];
  nav: NavItem[];
  about: string[];
  education: EducationEntry[];
  experience: ExperienceEntry[];
  projects: Project[];
}
