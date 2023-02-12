/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*html', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    screens: {
      'sm': '320px',
      'smd': '481px',
      'md': '600px',
      'slg': '760px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        veryLightGray: 'hsl(0, 0%, 98%)',
        lightdark: '#343434',
        softdark: '#818181',
        softyellow: ' #FFFAE9',
        orange: '#C79D33'
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
