/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      Barlow: ["Barlow Condensed", "sans-serif"],
      Tomorrow: ["Tomorrow", "sans-serif"],
    },
  },
  plugins: [],
};
