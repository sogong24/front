/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "button-red": "#FF0000",
        "search-filter-color": "#E4E4E4",
      },
    },
  },
  plugins: [],
};
