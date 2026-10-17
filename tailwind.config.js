/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#123d2e",
        leaf: "#26734d",
        lime: "#d9ef8b",
        cream: "#f8f7f1",
        gold: "#e9bd62",
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
