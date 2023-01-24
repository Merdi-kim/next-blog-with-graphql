/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      'main-color': 'rgb(96 165 250)',
      'secondary-color': 'rgba(96, 165, 250, .5)',
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
