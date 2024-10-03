const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '360px',
      },
      fontFamily: {
        sans: ['"Roboto"', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(180deg, transparent -50%, #fbfbfb), linear-gradient(90deg, #d3d0fb, #d0f0fd)',
        'custom-gradient-dark':
          'linear-gradient(180deg, transparent -50%, #1a1a2e), linear-gradient(90deg, #3a3a6b, #334455)',
      },
    },
  },
  plugins: [],
}
