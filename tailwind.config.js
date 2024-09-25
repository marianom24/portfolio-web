/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: { max: "860px" },
        md: { max: "1200px" },
        "min-height": { max: "700px" },
      },
      keyframes: {
        "slide-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "slide-left": "slide-left 12s linear infinite",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
