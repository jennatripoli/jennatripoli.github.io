import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": { maxWidth: "0", opacity: "1" },
          "100%": { maxWidth: "100%", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        typing: "typing 3s steps(30, end) forwards",
        "typing-delay": "typing 3s steps(30, end) 4s forwards",
        fadeIn: "fadeIn 2s ease-out forwards",
        "fadeIn-delay": "fadeIn 2s ease-out 2s forwards"
      },
      fontFamily: {
        title: ["Cherry Bomb One", "serif"],
        body: ["Montserrat", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
