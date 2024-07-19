/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        white: "white",
        none: "none",
      },
      borderWidth: {
        1: "1px"
      },
      fontFamily: {
        dmSans: ["DM Sans", "sans-serif"],
        lora: ["Lora", "serif"],
      },
      gridTemplateRows: {
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
      }
    },
  },
  plugins: [],
}

