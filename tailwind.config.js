module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'max-md': { max: '768px' },
        'max-lg': { max: '900px' },
      },
      colors: {
        'hitam': '#222',
        'coklat': '#c49b66',
      },
      height: {
        '30rem': '30rem',
        '40rem': '40rem',
        '45rem': '45rem',
        '60rem': '60rem'
      }
    },
  },
  plugins: [],
}
