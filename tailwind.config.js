/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        latoRegular: "Lato-Regular",
        latoBold: "Lato-Bold",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
