/** @type {import('tailwindcss').Config} */

// import { heroBg } from "./src/assets/images";
import { heroBg } from "../assets/images";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./src/assets/images/heroBg.svg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },

    fontFamily: {
      sans: ["Space Grotesk"],
    },
  },
  plugins: [],
};
