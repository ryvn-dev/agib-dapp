module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        128: "32rem",
      },
      colors: {
        "agib-pink": "#fdb3ca",
        "agib-sky": "#a9dfe2",
        "agib-blue": "#5c6898",
        "agib-purple": "#d1d5fa",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
