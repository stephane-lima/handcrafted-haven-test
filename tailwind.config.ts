import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'background': '#FFFFFF',    /* White */
      'mainTitles': '#8B4513',    /* Saddle Brown */
      'paragraphs': '#1E1E1E',    /* Black */
      'golden': '#DAA520',        /* Goldenrod */
      'gray': '#C0C0C0',          /* Silver */
      'lightGray': '#f3f4f6',      /* Light Silver */
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
