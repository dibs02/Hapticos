/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        notch: ['"Stack Sans Notch"', "sans-serif"]
      }
    }
  },
  plugins: []
}
