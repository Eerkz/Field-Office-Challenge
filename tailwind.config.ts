import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "fo-bright-orange": "var(--fo-bright-orange)",
        "fo-mid-orange": "var(--fo-mid-orange)",
        "fo-gray": "var(--fo-gray)",
        "fo-black": "var(--fo-black)",
        "fo-cobalt": "var(--fo-cobalt)",
        "fo-mint": "var(--fo-mint)",
        "fo-blue": "var(--fo-blue)",
      },
    },
  },
  plugins: [],
};
export default config;
