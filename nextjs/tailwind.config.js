/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    },
    fontFamily: {
      inter: ['Inter-Regular'],
    },
    colors: {
      'my-yellow': '#FBF5D0',
      'my-yellow-50': '#FDFAE7',
      'brown-text': '#5F5207',
      'my-blue': '#222F40',
      'encart': '#F2E9E2',
      'orange-text': '#F29C6B',
      'normal-text': '#222F40',
    },
  },
  plugins: [],
}