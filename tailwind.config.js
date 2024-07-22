/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      body: {
        "scroll-behavior": "smooth",
      },
      colors: {
        blue: "#0055d4",
        gray: "#f3f3f3",
        "custom-gray": "#1F2937",
      },
      fontFamily: {
        custom: ["Space Grotesk", "sans-serif"],
        styly: ["Playwrite CU", "cursive"],
      },
      keyframes: {
        "dot-fill": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        "dot-fill": "dot-fill 0.3s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
