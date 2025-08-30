/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./src/**/*.{html,ts,css}"],
  theme: {
    extend: {
      colors: {
        'wind-blue': '#0079be',
        'links-blue': '#182864',
        'button-back': '#066095',
        'newsletter-back': '#f2f8fb'
      },
      borderRadius: {
        'left-flat-right-full': "0 9999px 9999px 0",
      },

      screens: {
        'xs': '375px',
        'mlg': '896px'
      },
    },
  },
  plugins: [
    require('tailwind-clip-path'),
    require('@tailwindcss/line-clamp'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.subtle-inner-shadow': {
          'box-shadow': '3px 5px 44px -9px rgba(52, 47, 47, 0.75) inset',
        },
        '.used-tech-icon-gradient': {
          background: 'linear-gradient(90deg, #0677B9 0%, #055A8B 65%, #05507A 88%)'
      }
      });
    }),
  ],
}

