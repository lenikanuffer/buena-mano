/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        buenamano: {
          default: ' #93c2bc'
        } 
      }
    },
  },
  plugins: [],
}