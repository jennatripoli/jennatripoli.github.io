import React from "react";

export const Experience = () => {
  const experiences = [
    {
      date: "Jun 2024 - Present",
      position: "Full-Stack Engineer",
      company: "Gently",
      location: "Santa Monica, CA",
      description: [
        "Enhance API capabilities and performance to facilitate same-day local deliveries for a growing client base.",
        "Engineer a custom warehouse management system leveraging modern front-end technologies.",
        "Create solutions using TypeScript, React, Prisma, Express, Next, Astro, TinaCMS, Tailwind, and Vitest.",
        "Develop integrations with Shopify, Route4Me, Twilio, SendGrid, Narvar, Clerk Auth, and AskNicely.",
        "Use AWS for deployment through Amplify and App Runner, and storage of media and logs through S3.",
      ],
    },
    {
      date: "Jan - May 2024",
      position: "Software Engineering Consultant",
      company: "ASL Education Center",
      location: "Framingham, MA (Remote)",
      description: [
        "Collaborated in designing and creating cutting-edge online technology for native ASL signers.",
        "Designed and implemented responsive and modular web applications with JavaScript, React, and CSS.",
        "Streamlined project collaboration across time zones using GitHub Projects to enhance team efficiency.",
      ],
    },
    {
      date: "Jun - Aug 2023",
      position: "Technology Development Intern",
      company: "Optum",
      location: "Cypress, CA",
      description: [
        "Improved an internal insurance claim management portal by implementing a data override system.",
        "Used Java, Oracle Scripts, SQL, and REST APIs for the back end and JavaScript for the front end.",
        "Worked with Jenkins for CI/CD, DBeaver and Postman for testing, and Rally for Agile collaboration.",
      ],
    },
    {
      date: "Mar 2022 - Dec 2023",
      position: "Student Teaching Assistant",
      company: "Worcester Polytechnic Institute",
      location: "Worcester, MA",
      description: [
        "Provided detailed feedback on projects and held office hours to answer questions and debug issues.",
        "Taught students concepts in Python, SQL, relational databases, and data visualization.",
      ],
    },
  ];

  return (
    <section className="min-h-screen max-w-5xl mx-auto p-8 space-y-8">
      <p className="font-title pb-2 text-6xl lg:pb-6 lg:text-8xl text-white">
        Work Experience
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
      <div className="bg-white rounded-lg p-4 text-left w-full">
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
          <li key={key}>{item}</li>
        ))}
      </div>
    </div>
  );
};
