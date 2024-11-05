import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        DesaturatedDarkCyan: "var(--DesaturatedDarkCyan)",
        LightGrayishCyanBackground: "var(--LightGrayishCyanBackground)",
        LightGrayishCyan: "var(--LightGrayishCyan)",
        DarkGrayishCyan: "var(--DarkGrayishCyan)",
        VeryDarkGrayishCyan: "var(--VeryDarkGrayishCyan)",
      },
    },
  },
  plugins: [],
};
export default config;
