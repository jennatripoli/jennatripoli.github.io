"use client";

import { ProjectCard, SectionTitle } from "@/components/ui";

export function ProjectsSection() {
  const projects = [
    {
      title: "ASL Survey Tool",
      image: "/media/asl_survey_tool.png",
      description:
        "Web app that hosts surveys in American Sign Language, relying entirely on videos and non-textual elements. The design incorporates color indicators that meet WCAG 2.2 and USWDS standards for non-text contrast. To evaluate the tool's usability, we conducted an unmoderated user study with 30 Deaf participants. It was used at the Symposium on AI and Sign Language Interpreting in April 2024.",
      tech: ["JavaScript", "React", "CSS", "AWS"],
      links: [
        { link: "/docs/ASL_Survey_Tool.pdf", title: "Paper" },
        { link: "/docs/ASL_Survey_Tool.png", title: "Poster" },
      ],
    },
    {
      title: "Warehouse Management System",
      image: "/media/warehouse_management_system.png",
      description:
        "Web app for all operations of a same-day delivery company. It provides an easy way to track and edit orders, configure vendors, update inventory, and manage billing. Vendors have their own dashboard to view all of their recent deliveries. Customers can use their tracking number to see the order status and proof of delivery. Its featuress utilize integrations with Shopify, Route4Me, Twilio, SendGrid, and Clerk.",
      tech: ["TypeScript", "React", "Tailwind", "AWS"],
    },
  ];

  return (
    <section id="projects" className="px-4 py-8 md:py-16 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Featured Projects" />
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard {...project} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
