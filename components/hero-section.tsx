"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  LinkButton,
} from "@/components/ui";
import { FileUser, Linkedin } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="about"
      className="py-20 px-4 w-full min-h-[85vh] md:min-h-[95vh] flex items-center justify-center"
    >
      <div className="max-w-4xl text-center">
        <div className="mb-8">
          <Avatar className="w-32 h-32 mx-auto mb-6 border-4 border-pink-500 shadow-lg">
            <AvatarImage src="/media/profile.jpg" alt="Jenna Tripoli" />
            <AvatarFallback className="text-2xl bg-pink-500 text-white font-heading">
              JT
            </AvatarFallback>
          </Avatar>
          <h1 className="font-heading font-bold text-5xl md:text-6xl text-cyan-800 mb-4">
            Jenna Tripoli
          </h1>
          <p className="text-xl text-slate-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            I am a front-end software engineer at Coco Robotics.
          </p>
          <div className="flex justify-center space-x-4">
            <LinkButton
              title="LinkedIn"
              icon={Linkedin}
              link="https://linkedin.com/in/jennatripoli"
              color="pink"
            />
            <LinkButton
              title="Resume"
              icon={FileUser}
              link="/docs/Jenna_Tripoli_Resume.pdf"
              className="hover:bg-cyan-100!"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
