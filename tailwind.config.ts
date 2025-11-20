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
      },
    },
  },
  plugins: [],
};
export default config;
