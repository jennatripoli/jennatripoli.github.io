"use client";

import { Badge, Card, CardContent, SectionTitle } from "@/components/ui";

export function ExperienceSection() {
  const experience = [
    {
      role: "Front-End Software Engineer",
      company: "Coco Robotics",
      period: "Jan 2025 - Present",
      description: [
        "Manage the design and functionality of 10+ different applications across varying user groups.",
        "Spearheaded the creation of a design system with Shadcn and component management in Storybook.",
        "Added E2E testing with Playwright, integrated with CI to ensure pages maintain their functionality.",
        "Create custom interfaces to refine triaging, prioritizing mobile-friendly design for user convenience.",
        "Work with TypeScript, React, Tailwind, MapboxGL, ConnectRPC, React Native, Fullstory, and Auth0.",
      ],
    },
    {
      role: "Full-Stack Software Engineer",
      company: "Gently U.S.",
      period: "Jun - Dec 2024",
      description: [
        "Revamped a proprietary warehouse management system to facilitate a growing client and customer base.",
        "Developed the ability for customers to track the progress of their order and easily see proof of delivery.",
        "Streamlined client billing by developing a cron job and a friendly user interface for creating invoices.",
        "Developed solutions using TypeScript, React, Tailwind, AWS, Prisma, Express, Next, and Vitest.",
        "Enhanced integrations with Shopify, Route4Me, Twilio, SendGrid, Clerk, and AskNicely.",
      ],
    },
    {
      role: "Software Engineer",
      company: "ASL Education Center",
      period: "Jan - May 2024",
      description: [
        "Designed and developed tools for Deaf-centric online technology using JavaScript, React, and CSS.",
        "Contributed to high-quality collaboration across time zones, using GitHub Projects for team efficiency.",
      ],
    },
    {
      role: "Researcher and Developer",
      company: "WPI Human-Computer Interaction Lab",
      period: "Aug 2023 - May 2024",
      description: [
        "Created a cutting-edge platform for making and distributing surveys in American Sign Language (ASL).",
        "Used guidelines from the WCAG 2.2 and USWDS color indicators and standards for non-text contrast.",
        "Implemented and deployed the application using JavaScript, React, CSS, Python, PostgreSQL, and AWS.",
        "Conducted a successful unmoderated user study with 30 Deaf participants to evaluate the tool's usability.",
      ],
    },
    {
      role: "Technology Development Intern",
      company: "Optum",
      period: "Jun - Aug 2023",
      description: [
        "Improved an internal insurance claim management portal by creating a data override system.",
        "Used Java, Oracle Scripts, SQL, and REST APIs for the back end functionality of the feature.",
        "Worked with Jenkins for CI/CD, DBeaver and Postman for testing, and Rally for Agile collaboration.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="px-4 py-8 md:py-16 bg-white min-h-screen"
    >
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Relevant Experience" />
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <Card
              key={index}
              className="border-cyan-100 hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent>
                <div className="flex flex-col md:flex-row items-start md:justify-between mb-3">
                  <div>
                    <h3 className="font-heading font-bold text-lg text-cyan-800">
                      {exp.role}
                    </h3>
                    <p className="text-pink-500 font-medium">{exp.company}</p>
                  </div>
                  <Badge
                    variant="outline"
                    className="border-cyan-200 text-cyan-700 w-fit mt-2 md:mt-0"
                  >
                    {exp.period}
                  </Badge>
                </div>
                <div className="pl-4 pr-2">
                  {exp.description?.map((item, key) => (
                    <li key={key} className="text-slate-600 leading-relaxed">
                      {item}
                    </li>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
