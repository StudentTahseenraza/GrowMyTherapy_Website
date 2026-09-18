import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          DEFAULT: "#7C9A92",
          50: "#F1F5F3",
          100: "#E2EBE8",
          200: "#C6D8D1",
          300: "#A9C4BA",
          400: "#8DB0A3",
          500: "#7C9A92",
          600: "#5E7C74",
          700: "#495F59",
          800: "#33433F",
          900: "#1E2725",
        },
        cream: "#F6F2EC",
        terracotta: {
          DEFAULT: "#D8A48F",
          light: "#E8C4B4",
          dark: "#BD8570",
        },
        ink: "#253238",
        canvas: "#FBFAF8",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "28px",
        "card-sm": "20px",
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(37, 50, 56, 0.18)",
        card: "0 12px 40px -12px rgba(37, 50, 56, 0.14)",
      },
      maxWidth: {
        prose: "70ch",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
