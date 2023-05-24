/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container : {
      center : true,
      padding : '16px',
    },
    extend: {
      colors : {
        primary : '#D21321',
        secondary : '#64748b',
        facebook : '#4267B2',
        gmail : '#DB4437',
        youtube : '#FF0000',
        dark : '#0f172a'
      },
      screens : {
        '2xl' : '1320px',
      },
      
    },
  },
  plugins: [],
}

