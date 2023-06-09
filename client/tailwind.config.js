/** @type {import('tailwindcss').Config} */

const _ = require("lodash");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        neon: ["Tilt Neon", "cursive"],
        codepro: ["Source Code Pro", "monospace"],
        dancing: ["Dancing Script", "cursive"],
        charmon: ["Charmonman", "cursive"],
        baby: ["Oooh Baby", "cursive"],
        delafield: ["Mrs Saint Delafield", "cursive"],
        mont: ["Montserrat", "sans-serif"],
        nunito: ["Nunito"],
      },
    },
  },

  plugins: [],
};
