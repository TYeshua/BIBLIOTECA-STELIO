/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9B1B30', // Royal Red/Wine
        secondary: '#FFF5F5', // Soft White/Pinkish
        accent: '#C5A059', // Gold
        text: '#1E293B', // Slate-800
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
