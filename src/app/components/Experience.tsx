import React from "react";

export const Experience = () => {
  const experiences = [
    {
      date: "May 2024 - Present",
      position: "Volunteer Mentor",
      company: "Beach Cities Robotics",
      location: "Redondo Beach, CA",
      description: [
        "Teach high school students skills in Java programming and GitHub for robot control systems.",
        "Help design and develop the team's website and their application for strategy and data analysis.",
      ],
    },
    {
      date: "Jun - Dec 2024",
      position: "Full-Stack Engineer",
      company: "Gently",
      location: "Santa Monica, CA",
      description: [
        "Enhanced API capabilities to facilitate same-day local deliveries for a growing client base.",
        "Engineered a custom warehouse management system with modern front-end design and technology.",
        "Created solutions with TypeScript, React, TailwindCSS, AWS, Prisma, Express, Next, and Vitest.",
        "Developed back-end integrations with Shopify, Route4Me, Twilio, SendGrid, Clerk, and AskNicely.",
      ],
    },
    {
      date: "Jan - May 2024",
      position: "Software Engineer",
      company: "ASL Education Center",
      location: "Framingham, MA (Remote)",
      description: [
        "Designed and created responsive and modular web applications using JavaScript, React, and CSS.",
        "Streamlined collaboration across time zones using GitHub Projects to enhance team efficiency.",
      ],
    },
    {
      date: "Aug 2023 - Dec 2024",
      position: "Researcher and Developer",
      company: "WPI Human-Computer Interaction Lab",
      location: "Worcester, MA",
      description: [
        "Made a cutting-edge platform for creating and distributing surveys in American Sign Language (ASL).",
        "Used guidelines from the WCAG 2.2 and USWDS color indicators and standards for non-text contrast.",
        "Implemented and deployed the application using JavaScript, React, CSS, Python, PostgreSQL, and AWS.",
        "Conducted an unmoderated user study with 30 Deaf participants to evaluate the tool's usability.",
      ],
    },
    {
      date: "Jun - Aug 2023",
      position: "Technology Development Intern",
      company: "Optum",
      location: "Cypress, CA",
      description: [
        "Improved an internal insurance claim management portal by creating a data override system.",
        "Used Java, Oracle Scripts, SQL, and REST APIs for the back end functionality of the feature.",
        "Worked with Jenkins for CI/CD, DBeaver and Postman for testing, and Rally for Agile collaboration.",
      ],
    },
    {
      date: "Mar 2022 - Dec 2023",
      position: "Student Teaching Assistant",
      company: "Worcester Polytechnic Institute",
      location: "Worcester, MA",
      description: [
        "Delivered detailed feedback on projects, helping refine coding and problem-solving skills.",
        "Held regular office hours to debug issues, answer questions, and provide academic support.",
        "Taught and reinforced key concepts in Python, SQL, relational databases, and data visualization.",
      ],
    },
    {
      date: "Jun - Aug 2022",
      position: "Website Developer",
      company: "Worcester Polytechnic Institute",
      location: "Worcester, MA (Remote)",
      description: [
        "Designed and developed websites for multiple groups on campus using WordPress and custom CSS.",
        "Created templates for lab contributors to share research findings, streamlining content publication.",
      ],
    },
  ];

  return (
    <section className="min-h-screen max-w-5xl mx-auto p-8 space-y-8">
      <p className="font-title pb-2 text-6xl lg:pb-6 lg:text-8xl text-white">
        Experience
      </p>
      <div className="flex justify-center">
        <div className="flex flex-col">
          {experiences.map((experience, key) => (
            <TimelineItem
              key={key}
              date={experience.date}
              position={experience.position}
              company={experience.company}
              location={experience.location}
              description={experience.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({
  date,
  position,
  company,
  location,
  description,
}: {
  date: string;
  position: string;
  company: string;
  location: string;
  description: string[];
}) => {
  return (
    <div className="border-l-4 pl-8 py-8 flex flex-row items-start gap-x-8">
      <div className="bg-white rounded-full w-5 h-5 -ml-11 mt-6 md:mt-4 flex-shrink-0" />
      <div className="bg-[#262626] text-white rounded-lg p-4 text-left w-full">
        <p className="hidden md:block text-body text-sm lg:text-base">
          {date} | {location}
        </p>
        <p className="block md:hidden text-body text-sm lg:text-base">{date}</p>
        <p className="block md:hidden text-body text-sm lg:text-base">
          {location}
        </p>
        <p className="text-body text-lg lg:text-2xl font-bold mt-2">
          {position}
        </p>
        <p className="text-body text-lg lg:text-2xl">{company}</p>
        <br />
        {description.map((item, key) => (
          <li key={key} className="text-sm lg:text-base">
            {item}
          </li>
        ))}
      </div>
    </div>
  );
};
