/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(180deg, transparent -50%, #fbfbfb), linear-gradient(90deg, #d3d0fb, #d0f0fd)',
      },
    },
  },
  plugins: [],
}
