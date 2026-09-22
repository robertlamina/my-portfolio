import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0d0d0d",
        card: {
          DEFAULT: "#141414",
          hover: "#1a1a1a",
        },
        border: {
          DEFAULT: "#262626",
          subtle: "#1f1f1f",
        },
        primary: {
          DEFAULT: "#f3f4f6",
          muted: "#9ca3af",
          subtle: "#6b7280",
        },
        accent: {
          DEFAULT: "#60a5fa",
          bg: "rgba(30, 58, 138, 0.3)",
          border: "rgba(30, 64, 175, 0.4)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
