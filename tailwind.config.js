const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: [],
  theme: {
    extend: {
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
