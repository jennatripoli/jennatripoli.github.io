import {
  AboutSection,
  ExperienceSection,
  Footer,
  ProjectsSection,
  Sidebar,
} from "@/components/index";
import { getSiteContent } from "@/content";

export default function Portfolio() {
  const content = getSiteContent();

  return (
    <div className="min-h-screen lg:flex lg:justify-center">
      <div className="w-full lg:flex lg:max-w-[96rem]">
        <Sidebar content={content} />
        <main className="lg:flex-1">
          <AboutSection content={content} />
          <ExperienceSection content={content} />
          <ProjectsSection content={content} />
          <Footer />
        </main>
      </div>
    </div>
  );
}
