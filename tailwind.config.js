module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        bebas: ['Bebas Neue', 'cursive'],
        lato: ['Lato'],
      },
      fontSize: {
        xs: '.75rem',
        sm: '.875rem',
        tiny: '.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        '7-exl': '7rem',
        '8xl': '8rem',
        '9xl': '9rem',
        '10xl': '10rem',
        '12xl': '12rem',
        '16xl': '16rem',
      },
      screen: {
        sm: { min: '576px' },
        md: { min: '768px' },
        lg: { min: '992px' },
        xl: { min: '1200px' },
      },
      backgroundColor: {
        sabbia: '#f5f1f1',
      },
      textColor: {
        sabbia: '#f5f1f1',
      },
      width: {
        30: '30rem',
      },
      height: {
        30: '30rem',
      },
      zIndex: {
        '-1': '-1',
        '-2': '-2',
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ['hover'],
    },
  },
  plugins: [],
};
