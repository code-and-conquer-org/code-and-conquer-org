/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './page/**/*.html',
    './*.html',
    './*.md',
    './**/*.md',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["emerald", "dark", "light"], // Add or change themes as you like
  },
}