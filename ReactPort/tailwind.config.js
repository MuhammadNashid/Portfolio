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
        gradient: 'gradientAnimation 10s ease infinite',
        float: 'float 10s infinite ease-in-out',
        'bg-move': 'bgMove 10s linear infinite',
      },
      keyframes: {
        bgMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        backgroundAnimation: {
          '0%': { 'background-position': '0% 0%' },
          '50%': { 'background-position': '100% 100%' },
          '100%': { 'background-position': '0% 0%' },
        },
        gradientAnimation: {
          '0%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
          '100%': {
            'background-position': '0% 50%',
          },
        },
        float: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0' },
          '50%': { transform: 'translateY(-200px) scale(1.5)', opacity: '1' },
          '100%': { transform: 'translateY(0) scale(1)', opacity: '0' },
        },
        bgMove: {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
          '100%': {
            backgroundPosition: '0% 50%',
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

