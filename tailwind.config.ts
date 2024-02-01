import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "fira-code": ["Fira Code", "monospace"],
        "rubik": ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;