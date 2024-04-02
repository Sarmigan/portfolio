import type { Config } from "tailwindcss";

const config: Config = {
  variants: {
    extend: {
     backgroundOpacity: ['active'],
    }
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "dark-background": "#191919",
      },
      fontFamily: {
        "fira-code": ["Fira Code", "monospace"],
        "rubik": ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};

export default config;