/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'landingbg': "url('/img/bg.png')"
      }
    },
  },
  plugins: [],
}
