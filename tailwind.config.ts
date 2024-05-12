import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    daisyui: {
      themes: [
        "cupcake", "dark", "cmyk"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "main-section": "#FFD4D0",
        "bg-section": "#F7F7F7",
        "h-one": "#1F1F1F",
        "h-two": "#ffffff",
        "h-three": "#FC3314",
        "progress-bg": "#E1E1E1"
      },
    },
  },
  plugins: [require('daisyui')],
};

export default config;
