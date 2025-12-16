/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: "var(--font-title)",
        body: "var(--font-body)",
      },
      colors: {
        primary: "#ffd546",
        accent1: "#fc7030",
        accent2: "#ff5353",
        dark: "#202020",
        light: "#eff0f2",
      },
    },
  },
  plugins: [],
};