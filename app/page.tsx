import {
  Navigation,
  HeroSection,
  SkillsSection,
  ProjectsSection,
  ExperienceSection,
  ContactSection,
} from "@/components/index";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-white">
      <Navigation />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}
