"use client";

import Image from "next/image";
import React from "react";

export const Projects = () => {
  const projects = [
    {
      title: "ASL Survey Tool",
      tools: ["JavaScript", "React", "CSS", "AWS"],
      tagline:
        "Platform for creating and distributing surveys in American Sign Language (ASL).",
      description:
        "The tool hosts surveys that use no written English and instead fully rely on videos and non-textual elements. The design includes color indicators compliant with WCAG 2.2 and USWDS for non-text contrast and color tokens. We conducted an unmoderated user study with 30 Deaf participants to evaluate the tool's usability.",
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
        "Users are able to make study sets with terms and definitions that they enter, and then study this information with animated digital flashcards. The application features a study plan timer using the Pomodoro Technique for structured studying, along with a dictionary search that handles written and spoken input.",
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
    /*{
      title: "Smiski Tracker",
      tools: ["JavaScript", "React", "CSS"],
      tagline: "Website to track collectible figurines.",
      description:
        "Users can select and deselect icons to indicate whether they have a certain figurine, along with collapse and expand various series. The site maintains these visual selections using local storage. All media is from smiski.com and the interface design uses the same color scheming as the brand site.",
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
    },*/
    {
      title: "2x2 Madness",
      tools: ["JavaScript", "React", "CSS"],
      tagline: "Grid puzzle about matching colors.",
      description:
        "The player must rotate groups of four squares to create groups of the same color, with the goal of matching and removing all colors. The game has three boards of size 4x4, 5x5, and 6x6. The application uses an Entity Boundary Controller structure with a Canvas and JSON configurations for the board.",
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
      title: "FIRST Robotics Competition",
      tools: ["Java"],
      tagline: "Robot software for FRC Team 294.",
      description:
        "Teach high school students about Java coding and GitHub for robot programming and web development. Use PID controls, motion profiling, and vision processing for teleoperation and autonomous routines with custom visual displays to provide information and functionality.",
      media: ["/media/first_robotics/2020.jpg"],
      border: true,
      buttons: [
        {
          text: "Team Website",
          href: "https://team294.com",
        },
      ],
    },
    {
      title: "Rowdy Raccoon",
      tools: ["Unreal Engine 4", "Blueprints"],
      tagline: "Explore the town as a raccoon.",
      description:
        "The player can mess with objects, scare humans, talk to animals, do parkour, eat food, and collect bottle caps to earn points. This game was created in six weeks and uses blueprints for features like save states, score calculations, character sockets, object interactions, and the user interface design.",
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
    {
      title: "Mystery in the Mansion",
      tools: ["Unreal Engine 5", "Blueprints"],
      tagline: "Investigate a hilltop mansion.",
      description:
        "The player must explore their surroundings and solve a variety of puzzles to progress through the map and learn about the game's setting. This game was created in three weeks and uses blueprints for the user interface, puzzles, object interactions, atmosphere, and sound design.",
      media: ["/media/mystery_in_the_mansion/demo.gif"],
      border: true,
      buttons: [
        {
          text: "Demo",
          href: "https://youtu.be/F9SbaOPLvIo",
        },
        {
          text: "Download",
          href: "https://drive.google.com/file/d/1OKgcj3_tn1jvkSzyBn0ugL7EJrz4-rNC",
        },
      ],
    },
  ];

  return (
    <section className="min-h-screen max-w-6xl mx-auto p-8 space-y-8">
      <p className="font-title pb-2 text-6xl lg:pb-6 lg:text-8xl text-white">
        Past Projects
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
              className="rounded-md bg-[#7D8491] text-white w-fit px-4 hover:scale-110 transition-all duration-300"
              href={button.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {button.text}
            </a>
          ))}
        </div>
      </div>

      <div className="md:col-span-2 bg-white rounded-lg p-4 w-full text-center md:text-left">
        <p className="text-body text-lg lg:text-2xl font-bold">{title}</p>
        <div className="flex flex-row flex-wrap justify-center md:justify-start gap-2 mt-2">
          {tools.map((tool, key) => (
            <div
              key={key}
              className="rounded-md bg-[#7D8491] text-white w-fit px-2"
            >
              {tool}
            </div>
          ))}
        </div>
        <br />
        <p className="text-body text-sm lg:text-base font-bold">{tagline}</p>
        <p className="text-body text-sm lg:text-base">{description}</p>
      </div>
    </div>
  );
};
