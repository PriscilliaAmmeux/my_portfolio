import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "pp-neue-machina": ["var(--font-pp-neue-machina)", "sans-serif"],
      },
      animation: {
        "bounce-slow": "bounce 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        wiggle: "wiggle 2s ease-in-out infinite",
        wave: "wave 4s ease-in-out infinite",
        "wave-gentle": "wave-gentle 6s ease-in-out infinite",
        "fade-in": "fadeIn 1s ease-out forwards",
        "fade-in-up": "fadeInUp 1s ease-out forwards",
        "fade-in-scale": "fadeInScale 0.8s ease-out forwards",
        typing: "typing 3.5s steps(60, end) forwards",
        "blink-caret": "blink-caret 0.75s step-end infinite",
        "remove-caret": "remove-caret 0s 3.5s forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0px) rotate(0deg)",
          },
          "50%": {
            transform: "translateY(-20px) rotate(2deg)",
          },
        },
        wiggle: {
          "0%, 100%": {
            transform: "rotate(-3deg)",
          },
          "50%": {
            transform: "rotate(3deg)",
          },
        },
        wave: {
          "0%": {
            transform: "translateY(0px) translateX(0px) rotate(0deg)",
          },
          "25%": {
            transform: "translateY(-15px) translateX(5px) rotate(1deg)",
          },
          "50%": {
            transform: "translateY(0px) translateX(0px) rotate(0deg)",
          },
          "75%": {
            transform: "translateY(15px) translateX(-5px) rotate(-1deg)",
          },
          "100%": {
            transform: "translateY(0px) translateX(0px) rotate(0deg)",
          },
        },
        "wave-gentle": {
          "0%": {
            transform: "translateY(0px) translateX(0px)",
          },
          "33%": {
            transform: "translateY(-10px) translateX(8px)",
          },
          "66%": {
            transform: "translateY(5px) translateX(-3px)",
          },
          "100%": {
            transform: "translateY(0px) translateX(0px)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeInScale: {
          "0%": {
            opacity: "0",
            transform: "scale(0.9)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        typing: {
          "0%": {
            width: "0",
          },
          "100%": {
            width: "100%",
          },
        },
        "blink-caret": {
          "0%, 100%": {
            borderColor: "transparent",
          },
          "50%": {
            borderColor: "rgb(219, 39, 119)",
          },
        },
        "remove-caret": {
          "0%": {
            borderRightWidth: "4px",
          },
          "100%": {
            borderRightWidth: "0px",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
