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
        backgroundCard: "#1f1f1f",
        backgroundLinks: "#333333",
        fontGreen: "#c5f82a",
      },
    },
  },
  plugins: [],
};
