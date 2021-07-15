module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        100: '25rem',
        744: '744px'
      },
      width: {
        'footer': '915px',
      },
      colors: {
        brown: '#272525',
        darkBrown: '#222020',
        yellow: '#FAC825',
      },
      padding: {
        18: '4.5rem'
      }
    },
  },
  variants: {
    extend: {
      space: ['last'],
    },
  },
  plugins: [],
}
