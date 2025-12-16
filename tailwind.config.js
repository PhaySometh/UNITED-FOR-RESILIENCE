/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["var(--font-cadtmono)", "monospace"],
        body: ["var(--font-poppins)", "Poppins", "sans-serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        primary: {
          DEFAULT: "#ffd546",
          100: "#fff7d6",
          200: "#ffe89c",
          300: "#ffd546",
        },
        "primary-yellow": "#ffd546",
        "primary-orange": "#fc7030",
        "primary-red": "#ff5353",
        "neutral-dark": "#202020",
        "neutral-light": "#eff0f2",
        orange: {
          DEFAULT: "#fc7030",
        },
        red: {
          DEFAULT: "#ff5353",
        },
        dark: {
          DEFAULT: "#202020",
        },
        light: {
          DEFAULT: "#eff0f2",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient":
          "linear-gradient(90deg, #ffd546 0%, #fc7030 50%, #ff5353 100%)",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        xl: "1.25rem",
      },
      boxShadow: {
        button: "0 4px 14px 0 rgba(255, 213, 70, 0.39)",
      },
    },
  },
  plugins: [],
};
