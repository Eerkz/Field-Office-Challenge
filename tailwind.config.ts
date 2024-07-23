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
        "fo-bright-orange": "#ff4d00",
        "fo-mid-orange": "#ff993b",
        "fo-gray": "#eeebe7",
        "fo-black": "#121212",
        "fo-cobalt": "#346dee",
        "fo-mint": "#c8fde5",
        "fo-blue" : '#177EE5'
      },
    },
  },
  plugins: [],
};
export default config;
