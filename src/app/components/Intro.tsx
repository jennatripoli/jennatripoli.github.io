import Image from "next/image";
import { Links } from "./Links";

export const Intro = () => {
  return (
    <section
      id="intro"
      className="min-h-screen max-w-5xl mx-auto p-8 flex flex-row items-center justify-center text-white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 place-items-center -mt-20 md:mt-0">
        <div className="max-w-56 lg:max-w-xs">
          <Image
            src={"/media/profile.jpg"}
            alt="Profile Photo"
            width={500}
            height={500}
            className="rounded-full border-white border-4"
            priority
          />
        </div>
        <div className="lg:col-span-2 text-center lg:text-left space-y-4">
          <p className="text-lg lg:text-2xl overflow-hidden whitespace-nowrap">
            Hello, World! My name is
          </p>
          <p className="font-title pb-2 text-6xl lg:pb-6 lg:text-8xl">
            Jenna Tripoli
          </p>
          <p className="text-lg lg:text-2xl overflow-hidden whitespace-nowrap">
            and welcome to my portfolio.
          </p>
        </div>
        <Links />
      </div>
    </section>
  );
};
