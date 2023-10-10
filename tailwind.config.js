/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'sans': ['"Mukta"', 'sans-serif']
    },
    extend: {
      colors: {
        'primary': '#004A73',
        'secondary': '#E0F2FF',
        'tertiary': '#F8FCFF'
      }
    },
  },
  plugins: [],
}

