module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        100: '25rem'
      },
      width: {
        'footer': '915px'
      },
      colors: {
        brown: '#272525',
        darkBrown: '#222020',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
