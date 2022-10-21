const { text } = require("@fortawesome/fontawesome-svg-core");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage:{
        'hero':"url('/puma.webp')"
      },
      colors:{
        gold:"#a0741c"
      }
    },
  },
  plugins: [],
};
