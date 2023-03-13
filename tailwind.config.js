/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'secondary': '#AA0000',
        'border-secondary': 'rgb(218, 15, 15)',
        'border-default': '#d1d1d1',
      },
      backgroundImage: {
        'hero-mobile': "url('./src/assets/img/slider-6-mobile.png')",
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
        'quicksand': ['Quicksand', 'Spartan', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
