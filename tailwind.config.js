/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter, serif"],
      },
      colors: {
        backgroundGray: "#141414",
      },
    },
  },
  plugins: [],
};