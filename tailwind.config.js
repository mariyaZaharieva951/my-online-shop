/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  plugins: [require("flowbite/plugin")],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        "gray": "#959EAD",
        "gray-light": "#F9FAFB",
        "blueGreen": "#47C1BF",
        "myviolet": "#43467F",
        "violetLight": "#5C6AC4",
        "yellowStar": "#EEC200",
        "redText": "#DE3618"
      
      },
    },
  },
  plugins: [],
};
