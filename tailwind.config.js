/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    colors: {
      "dark-blue": "hsl(233, 47%, 7%)",
      "desaturated-blue": "hsl(244, 38%, 16%)",
      "soft-violet": "hsl(275, 58%, 61%)",
      white: "hsl(0, 0%, 100%)",
      "transparent-white-para": "hsla(0, 0%, 100%, 0.75)",
      "transparent-white-heading": "hsla(0, 0%, 100%, 0.6)",
    },

    screens: {
      mobile: "375px",
      laptop: "1440px",
    },

    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "lexend-deca": ["Lexend Deca", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        bold: 700,
      },
    },
  },
  plugins: [],
};
