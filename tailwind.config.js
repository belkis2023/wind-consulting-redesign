/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./src/**/*.{html,ts,css}"],
  theme: {
    extend: {
      colors: {
        'wind-blue': '#0079be',
        'links-blue': '#182864',
        'button-back': '#066095'
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.subtle-inner-shadow': {
          'box-shadow': '3px 5px 44px -9px rgba(52, 47, 47, 0.75) inset',
        },
      });
    }),
  ],
}

