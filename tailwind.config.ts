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
        "forest-bg":      "#0a1a0f",
        "forest-surface": "#0f2415",
        "forest-border":  "#1a3d22",
        "forest-accent":  "#1D9E75",
        "forest-accent2": "#5DCAA5",
        "forest-text":    "#e8f5ef",
        "forest-muted":   "#7aaa8a",
        "forest-card":    "#0d1f13",
      },
      fontFamily: {
        sans:    ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        glow:      "glow 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(29,158,117,0.15)" },
          "50%":      { boxShadow: "0 0 40px rgba(29,158,117,0.35)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
