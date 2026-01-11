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
        'brand-red': '#9B1B30',
        secondary: '#FFF5F5', // Soft White/Pinkish
        accent: '#C5A059', // Gold
        'brand-gold': '#C5A059',
        text: '#1E293B', // Slate-800
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'slide-left': 'slide-left 0.3s ease-out',
        'fade-in': 'fade-in 0.2s ease-out',
        'scale-up': 'scale-up 0.3s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'slide-left': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-up': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
