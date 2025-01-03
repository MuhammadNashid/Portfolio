/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'bg-move': 'bgMove 10s infinite linear',
        'bg-animation': 'backgroundAnimation 10s ease-in-out infinite',
        moveDots: 'moveDots 4s infinite ease-in-out',
        fadeIn: 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        backgroundAnimation: {
          '0%': { 'background-position': '0% 0%' },
          '50%': { 'background-position': '100% 100%' },
          '100%': { 'background-position': '0% 0%' },
        },
        moveDots: {
          '0%': {
            transform: 'translate(0, 0)',
          },
          '50%': {
            transform: 'translate(30px, 30px)',
          },
          '100%': {
            transform: 'translate(0, 0)',
          },
        },
        
      },
      colors: {
        'gradient-start': '#ff7e5f',
        'gradient-middle': '#feb47b',
        'gradient-end': '#2575fc',
      },
      backgroundSize: {
        '200': '200% 200%',
      },
    },
  },
  plugins: [require('tailwindcss-motion')],
}

