const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  safelist: [
    {
      pattern:
        /(text|border|bg|placeholder)-(red|sky|violet)-(50|100|200|300|400|500|600|700|800|900)/,
      variants: ['hover', 'focus'],
    },
  ],
  theme: {
    transitionDelay: { 0: '0ms', 2000: '2000ms' },
    textDecorationThickness: { 6: '6px' },
  },
}
