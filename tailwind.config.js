const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  //darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: ['Oxygen', ...defaultTheme.fontFamily.sans]
    },
    extend: {}
  },
  plugins: []
}
