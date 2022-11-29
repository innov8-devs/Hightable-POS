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
        danger: '#FF1616',
        black: '#212121',
        'grey-100': '#D9D9D9',
        'grey-200': '#666670',
      },
      maxWidth: {
        limit: '1200px',
      },
      fontFamily: {
        title: 'DM Serif Display',
      },
      boxShadow: {
        card: '0px 1px 13px rgba(78, 51, 0, 0.11)',
      },
      gridTemplateColumns: {
        dashboard: 'repeat(auto-fit, 200px)',
        'dashboard-mobile': 'repeat(auto-fit, 120px)',
      },
    },
  },
  plugins: [],
};
