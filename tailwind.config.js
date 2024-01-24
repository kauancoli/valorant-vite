/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0A0A0A',
        secondary: '#F2F2F2',
        accent: '#FF4656',
        'accent-dark': '#FFA000',
        'accent-light': '#FFECB3',
        background: '#1F2326',
      },
      fontFamily: {
        body: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
