import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      body: ['"Inter"'],
    },
    colors: {
      darkBackground: {
        100: '#181515',
        200: '#131111',
        300: '#0F120F',
      },
      darkColoredBackground: {
        100: '#2F2A2A',
        200: '#242021',
        300: '#242021',
        400: 'rgb(12 11 11)',
      },
      border: {
        100: '#453E3E',
        200: '#312B2C',
        300: '#a5f3fc',
        400: 'rgb(151, 130, 135, .2)',
        500: 'rgb(30, 30, 30)',
      },
      text: {
        100: '#EEEEF0',
        200: '#8d978c',
        300: '#B5B2BC',
      },
      spotify: '#1DD05D',
      transparent: 'transparent',
      transparent2: 'rgb(34 32 33 / 65%)',
      transparent3: 'rgb(94 86 90 / 95%)',
    },
    extend: {
      fontFamily: {
        sans: ['interVariable', 'Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
