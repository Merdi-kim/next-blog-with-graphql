/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      'main-color': 'rgb(96 165 250)',
      'secondary-color': 'rgba(96, 165, 250, .5)',
      blue: '#002244',
      card: '#0d3b69',
      white: '#FFFFFF',
      fadingWhite: '#edf9fc',
      black: '#050505',
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
