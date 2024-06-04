/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        palanquin: ['Palanquin', 'sans-serif'],
        madimi:["Madimi One", "sans-serif"],
        briem: ['Briem Hand', 'sans-serif'],
        poetsen: ['Poetsen One', 'sans-serif'],
        
      },
      colors: {
        'custom-dark': '#0c0702',
        'custom-gray': '#49463e',
      },
    },
  },
  plugins: [],
}