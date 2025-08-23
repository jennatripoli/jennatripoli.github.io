"use client";

import { LinkButton } from "@/components/ui";
import { Linkedin, Github, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section className="px-4 py-16 bg-gradient-to-r from-cyan-800 to-pink-500">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center space-x-4">
          <LinkButton
            title="LinkedIn"
            link="https://linkedin.com/in/jennatripoli"
            icon={Linkedin}
          />
          <LinkButton
            title="GitHub"
            link="https://github.com/jennatripoli"
            icon={Github}
          />
          <LinkButton
            title="Email"
            link="mailto:jennatripoli02@gmail.com"
            icon={Mail}
          />
        </div>
      </div>
    </section>
  );
}
