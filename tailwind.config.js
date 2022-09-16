/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        main: '#111827',
        secondary: '#1f2937',
        accent: '#93c5fd',
        gray: '#9ca3af',
        slate: '#334155',
      },
      fontFamily: {
        lexend: ['"Lexend Deca"', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
