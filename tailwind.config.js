/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#202123',
        'custom-yellow': '#ffcc00',
      },
    },
  },
  plugins: [],
};