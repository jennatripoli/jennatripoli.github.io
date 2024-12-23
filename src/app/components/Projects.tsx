"use client";

import Image from "next/image";
import React from "react";

export const Projects = () => {
  const projects = [
    {
      title: "Gently",
      tools: ["TypeScript", "React", "TailwindCSS", "Astro", "TinaCMS"],
      tagline: "A local same-day delivery company.",
      description: "Gently's website allows visitors to explore available services through a clean and intuitive user experience. I prioritized responsive design to ensure seamless usability on both mobile and desktop platforms. The site is integrated with real-time customer reviews from AskNicely to highlight feedback and build trust.",
      media: ["/media/gently/gently_website.png"],
      border: false,
      buttons: [
        {
          text: "Visit",
          href: "https://gently.io",
        },
      ],
    },
    {
      title: "ASL Survey Tool",
      tools: ["JavaScript", "React", "CSS", "AWS"],
      tagline:
        "Platform for surveys in American Sign Language (ASL).",
      description:
        "The tool hosts surveys that eliminate written English, relying entirely on videos and non-textual elements. The design incorporates color indicators that meet WCAG 2.2 and USWDS standards for non-text contrast. To evaluate the tool's usability, we conducted an unmoderated user study with 30 Deaf participants.",
      media: ["/media/asl_survey_tool/multiple_choice.png"],
      border: false,
      buttons: [
        {
          text: "Poster",
          href: "/docs/ASL_Survey_Tool.png",
        },
        {
          text: "Report",
          href: "/docs/ASL_Survey_Tool.pdf",
        },
      ],
    },
    {
      title: "Study Buddy",
      tools: ["Kotlin", "XML", "SQLite", "REST"],
      tagline: "Android app for studying flashcards.",
      description:
        "Users can create custom study sets by entering terms and definitions, then review them using animated digital flashcards. The application also features a study plan timer based on the Pomodoro Technique. Additionally, it includes a dictionary search that supports both written and spoken input for easy access to definitions.",
      media: [
        "/media/study_buddy/study_set.png",
        "/media/study_buddy/add_term.png",
        "/media/study_buddy/flashcards.png",
      ],
      border: false,
      buttons: [
        {
          text: "GitHub",
          href: "https://github.com/jennatripoli/StudyBuddy",
        },
        {
          text: "Demo",
          href: "https://www.youtube.com/watch?v=2_jPqKdkBzg",
        },
      ],
    },
    {
      title: "Smiski Tracker",
      tools: ["JavaScript", "React", "CSS"],
      tagline: "Website to track collectible figurines.",
      description:
        "Users can select or deselect icons to track their collection, with the option to collapse or expand different series. The site preserves these choices using local storage, ensuring a personalized experience. All images are sourced from Smiski's official site, and the interface is designed to reflect the brand's signature color scheme.",
      media: ["/media/smiski_tracker/desktop.png"],
      border: false,
      buttons: [
        {
          text: "Visit",
          href: "https://jennatripoli.github.io/smiski",
        },
        {
          text: "GitHub",
          href: "https://github.com/jennatripoli/smiski",
        },
      ],
    },
    {
      title: "2x2 Madness",
      tools: ["JavaScript", "React", "CSS"],
      tagline: "Grid puzzle about matching colors.",
      description:
        "The player rotates groups of four squares to form color-matching sets, with the objective of removing all colors from the board. Built using a Model-View-Controller architecture, the application utilizes a Canvas object for rendering and JSON configurations to manage the board setup for three sizes.",
      media: ["/media/2x2_madness/demo.gif"],
      border: true,
      buttons: [
        {
          text: "Play",
          href: "https://jennatripoli.github.io/2x2-madness",
        },
        {
          text: "GitHub",
          href: "https://github.com/jennatripoli/2x2-madness",
        },
      ],
    },
    {
      title: "Rowdy Raccoon",
      tools: ["Unreal Engine 4", "Blueprints"],
      tagline: "Explore the town as a raccoon.",
      description:
        "The player can interact with objects, scare NPCs, communicate with animals, do parkour, eat food, and collect bottle caps to earn points. Developed in six weeks, the game uses blueprints to implement key features such as save states, score tracking, character sockets, object interactions, and the interface design.",
      media: ["/media/rowdy_raccoon/demo.gif"],
      border: true,
      buttons: [
        {
          text: "Demo",
          href: "https://youtu.be/1NMBR5P0ihk",
        },
        {
          text: "Download",
          href: "https://rowdyraccoonwpi.wordpress.com/download/",
        },
      ],
    },
  ];

  return (
    <section className="min-h-screen max-w-6xl mx-auto p-8 space-y-8">
      <p className="font-title pb-2 text-6xl lg:pb-6 lg:text-8xl text-white">
        Projects
      </p>
      <div className="flex justify-center">
        <div className="flex flex-col gap-20">
          {projects.map((project, key) => (
            <ProjectItem
              key={key}
              title={project.title}
              tools={project.tools}
              tagline={project.tagline}
              description={project.description}
              media={project.media}
              border={project.border}
              buttons={project.buttons}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectItem = ({
  title,
  tools,
  tagline,
  description,
  media,
  border,
  buttons,
}: {
  title: string;
  tools: string[];
  tagline: string;
  description: string;
  media: string[];
  border: boolean;
  buttons: { text: string; href: string }[];
}) => {
  const gridColumns = `grid-cols-${media.length}`;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-auto place-items-center">
      <div className="flex flex-col justify-center gap-4">
        <div
          className={`gap-4 place-items-center grid ${
            gridColumns || "grid-cols-3"
          }`}
        >
          {media.map((image, key) => (
            <div
              key={key}
              className={`col-span-1 ${
                border ? "rounded-lg border-2 border-white" : ""
              }`}
            >
              <Image
                src={image}
                alt={title}
                width={500}
                height={500}
                className={`h-48 ${
                  border ? "object-cover rounded-lg" : "object-contain"
                }`}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-row gap-4 items-center justify-center">
          {buttons.map((button, key) => (
            <a
              key={key}
              className="rounded-md bg-[#4d4d4d] text-white w-fit px-4 hover:scale-110 transition-all duration-300"
              href={button.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {button.text}
            </a>
          ))}
        </div>
      </div>

      <div className="md:col-span-2 bg-[#262626] rounded-lg p-4 w-full text-center md:text-left text-white">
        <p className="text-body text-lg lg:text-2xl font-bold">{title}</p>
        <div className="flex flex-row flex-wrap justify-center md:justify-start gap-2 mt-2">
          {tools.map((tool, key) => (
            <div key={key} className="rounded-md bg-[#4d4d4d] w-fit px-2">
              {tool}
            </div>
          ))}
        </div>
        <br />
        <p className="text-body text-sm lg:text-base font-bold mb-2">{tagline}</p>
        <p className="text-body text-sm lg:text-base">{description}</p>
      </div>
    </div>
  );
};
