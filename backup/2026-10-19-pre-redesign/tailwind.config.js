/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // for default text
        serif: ['Merriweather', 'serif'], // for headings
        mono: ['Fira Code', 'monospace'], // for code
      },
    },
  },
  plugins: [],
}
