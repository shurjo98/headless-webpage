// tailwind.config.ts
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
// Optional official plugins (work fine with Deno):
import typography from "npm:@tailwindcss/typography";
import forms from "npm:@tailwindcss/forms";

const config: Config = {
  content: [
    "./routes/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./islands/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // ✅ Local palettes (no imports needed)
      colors: {
        primary: {
          50: "#F0F8FF",
          100: "#E0F0FF",
          200: "#B8DBFF",
          300: "#8EC6FF",
          400: "#5DAEFF",
          500: "#2B95FF",
          600: "#0078E7",
          700: "#005EB4",
          800: "#004380",
          900: "#00244D",
        },
        surface: { 0: "#FFFFFF", 100: "#F5F8FC" },
        neutral: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
        "neon-aqua": "#00fff0",
        "neon-pink": "#ff00ff",

        // 🔵 Alias Material Tailwind’s “blue-gray” to Tailwind’s slate values
        "blue-gray": {
          50:  "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
          DEFAULT: "#475569",
        },
      },

      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
        mono: ["JetBrains Mono", "monospace"],
        display: ["Playfair Display", "serif"],
      },

      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },

      backgroundImage: {
        abstract:
          "radial-gradient(circle at 20% 20%, rgba(43,149,255,0.1), transparent 60%), " +
          "radial-gradient(circle at 80% 80%, rgba(43,149,255,0.1), transparent 60%)",
      },

      spacing: { 18: "4.5rem", 88: "22rem", 128: "32rem" },
      borderRadius: { "4xl": "2rem", "5xl": "2.5rem" },
      boxShadow: {
        soft:
          "0 2px 15px -3px rgba(0,0,0,0.07), 0 10px 20px -2px rgba(0,0,0,0.04)",
        medium:
          "0 4px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
        large:
          "0 10px 40px -10px rgba(0,0,0,0.15), 0 2px 10px -2px rgba(0,0,0,0.05)",
      },

      keyframes: {
        spinSlow: { from: { transform: "rotate(0deg)" }, to: { transform: "rotate(360deg)" } },
        bounceSlow: { "0%,100%": { transform: "scale(1)" }, "50%": { transform: "scale(1.02)" } },
        bounceArrow: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(8px)" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
        fadeIn: { from: { opacity: "0", transform: "scale(0.8)" }, to: { opacity: "1", transform: "scale(1)" } },
        popIn: { from: { opacity: "0", transform: "scale(0.6)" }, to: { opacity: "1", transform: "scale(1)" } },
        drift: {
          "0%,100%": { transform: "translateX(0) rotate(0deg)" },
          "25%": { transform: "translateX(8px) rotate(1deg)" },
          "75%": { transform: "translateX(-8px) rotate(-1deg)" },
        },
        slideIn: { from: { transform: "translateX(-100%)" }, to: { transform: "translateX(0)" } },
        slideUp: { from: { transform: "translateY(24px)", opacity: "0" }, to: { transform: "translateY(0)", opacity: "1" } },
      },
      animation: {
        spinSlow: "spinSlow 30s linear infinite",
        bounceArrow: "bounceArrow 1.5s ease-in-out infinite",
        bounceSlow: "bounceSlow 8s ease-in-out infinite",
        float: "float 8s ease-in-out infinite",
        fadeIn: "fadeIn 0.6s ease-out forwards",
        popIn: "popIn 0.4s ease-out forwards",
        drift: "drift 12s ease-in-out infinite",
        slideIn: "slideIn 0.3s ease-out",
        slideUp: "slideUp 0.9s cubic-bezier(0.22,1,0.36,1) both",
      },

      screens: { xs: "475px", "3xl": "1600px", "4xl": "1920px" },
    },
  },
  plugins: [
    typography,
    forms,
    plugin(({ addUtilities }) => {
      addUtilities({
        ".text-shadow-neon": {
          textShadow: "0 0 4px #00fff0, 0 0 8px #ff00ff, 0 0 16px #ff00ff",
        },
        ".scrollbar-hide": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": { display: "none" },
        },
        ".text-balance": { "text-wrap": "balance" },
        ".font-display": { "font-family": "Playfair Display, serif" },
        ".font-mono": { "font-family": "JetBrains Mono, monospace" },
      });
    }),
  ],
};

export default config;
