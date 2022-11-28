/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF8F00',
        black: '#212121',
        'grey-100': '#D9D9D9',
      },
      maxWidth: {
        limit: '1200px',
      },
      fontFamily: {
        title: 'DM Serif Display',
      },
    },
  },
  plugins: [],
};
