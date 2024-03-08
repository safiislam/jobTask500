/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        primary:'Bakilda Histori'
      },
      colors:{
        primary_color: '#270a05',
        secondary_color:"#86371C",
        gray_color:"#b6b8b7"
      }
    },
  },
  plugins: [],
}