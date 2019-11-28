const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');
const nesting = require('postcss-nesting');

module.exports = {
  plugins: [autoprefixer, nesting, tailwindcss],
};
