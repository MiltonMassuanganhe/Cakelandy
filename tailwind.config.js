/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      colors:{
      fundo: '#00000',
      background: '#FFFFFF',
      principal: {
        100: '#C2A47B',
        200: '#9B4B15'
    },
    special: '#F472B6',
    icones: '#924363'
    },
    backgroundImage: {
      'bg_1': "url('/images/bg_1.jpg')",
      'bg_2': "url('/images/bg_2.jpg')",
      'bg_3': "url('/images/bg_3.jpg')",
      'bg_4': "url('/images/bg_4.jpg')"
    },
    backgroundPosition: {
      bottom: 'bottom',
     'bottom-4': 'center bottom',
      center: 'center',
      'center-4': 'center center',
      left: 'left',
     'left-bottom': 'left bottom',
     'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
     'top-4': 'center top',
    }
  },
    fontFamily:{
      body: 'Nunito',
      titles: 'Poppins'
    }
  },
  plugins: [],
}
