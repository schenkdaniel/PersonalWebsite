module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        'offwhite': '#EEFBFB',
        'lightBlue': '#007CC7',
        'grayblue': '#425664',
        'lighterBlue' : '#4DA8DA',
        'greyish' : '#A0A1A1',
        'darkgreyish' : '#696969',
      },
      fontFamily: {
        mono: ['Orbitron']
      },
      backgroundColor: {
        'grayblue': '#425664',
        'darkBlue': '#12232E',
        'lightBlue' : '#007CC7',
        'lighterBlue' : '#4DA8DA',
        'inside' : "#314A59"
      },
      borderColor: {
        'grayblue': '#425664',
        'darkBlue': '#12232E',
        'lightBlue' : '#007CC7',
        'lighterBlue' : '#4DA8DA',
      },
      listStyleType: {
        none: 'none',
       disc: 'disc',
       decimal: 'decimal',
       square: 'square',
       roman: 'upper-roman',
       arrow: '▹',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
