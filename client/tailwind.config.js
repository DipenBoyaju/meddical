/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1F2B6C',
        secondary: '#159EEC',
        dark: '#212124',
        light: '#BFD2F8',
        lighter: "#FCFEFE",

      },
      fontFamily: {
        worksans: ['Work Sans', 'sans-serif'],
        yeseva: ['"Yeseva One"', 'serif'],
      }
    },
  },
  plugins: [],
}

