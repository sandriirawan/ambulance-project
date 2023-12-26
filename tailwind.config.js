const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

    "./node_modules/@nextui-org/theme/dist/components/button.js",
    "./node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#4EB7F2",
        secondary: "#064061",
        background: "black",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
