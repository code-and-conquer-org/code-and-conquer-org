/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_includes/**/*.{html,liquid,md,js}",
    "./_layouts/**/*.{html,liquid,md,js}",
    "./_posts/**/*.{html,liquid,md,js}",
    "./*.{html,liquid,md,js}",
    "./css/**/*.{css,scss}",
    "./page/**/*.{html,liquid,md,js}"
  ],
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["emerald", "dark", "light"], // Add or change themes as you like
  },
}