/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        play: "'Playwrite IT Moderna', cursive",
      },
    },
  },
  plugins: [require('daisyui'),],
}
