/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        garamond: ["Garamond"],
        lato: ["Lato"],
      },
    },
  },
  plugins: [],
}
