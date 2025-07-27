// tailwind.config.ts
import { type Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./routes/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./islands/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cyber: ["Orbitron", "sans-serif"],
      },
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
        surface: {
          0: "#FFFFFF",
          100: "#F5F8FC",
        },
        neutral: {
          900: "#0E172A",
          600: "#475569",
        },
        "neon-aqua": "#00fff0",
        "neon-pink": "#ff00ff",
      },
      backgroundImage: {
        abstract:
          "radial-gradient(circle at 20% 20%, rgba(43,149,255,0.1), transparent 60%), " +
          "radial-gradient(circle at 80% 80%, rgba(43,149,255,0.1), transparent 60%)",
      },
      keyframes: {
        spinSlow: { from: { transform: "rotate(0deg)" }, to: { transform: "rotate(360deg)" } },
        bounceSlow: { "0%,100%": { transform: "scale(1)" }, "50%": { transform: "scale(1.02)" } },
        bounceArrow: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(8px)" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
        fadeIn: { from: { opacity: 0, transform: "scale(0.8)" }, to: { opacity: 1, transform: "scale(1)" } },
        popIn: { from: { opacity: 0, transform: "scale(0.6)" }, to: { opacity: 1, transform: "scale(1)" } },
        drift: {
          "0%,100%": { transform: "translateX(0) rotate(0deg)" },
          "25%":     { transform: "translateX(8px) rotate(1deg)" },
          "75%":     { transform: "translateX(-8px) rotate(-1deg)" },
        },
      },
      animation: {
        spinSlow:    "spinSlow 30s linear infinite",
        bounceArrow: "bounceArrow 1.5s ease-in-out infinite",
        bounceSlow:  "bounceSlow 8s ease-in-out infinite",
        float:       "float 8s ease-in-out infinite",
        fadeIn:      "fadeIn 0.6s ease-out forwards",
        popIn:       "popIn 0.4s ease-out forwards",
        drift:       "drift 12s ease-in-out infinite",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".text-shadow-neon": {
          textShadow: "0 0 4px #00fff0, 0 0 8px #ff00ff, 0 0 16px #ff00ff",
        },
      });
    }),
  ],
};

export default config;
