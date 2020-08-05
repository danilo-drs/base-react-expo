const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        blue: {
          dark: '#202e78',
        }
      },
    },
  },
  variants: {},
  plugins: [
    plugin(function ({ addVariant, e }) {
      addVariant('dark-theme', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`core-them${separator}${className}`)}:disabled`
        })
      })
    })
  ],
}
