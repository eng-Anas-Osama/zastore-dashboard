/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],daisyui:{
    themes: ['nord','dark'],
    darkTheme: 'dark',
    styled: true,
    utils: true,
    prefix: '',
    logs: true,
    themeroot:':root',
  }
}

