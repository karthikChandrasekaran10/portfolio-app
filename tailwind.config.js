/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor:{
        'primary' :'rgb(85, 70, 184)'
      }
    },
    fontFamily: {
      'hero-font':'Dancing Script',
      'about-font':'Caveat'
    }
  },
  plugins: [],
}

