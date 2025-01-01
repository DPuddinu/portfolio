const defaultTheme = require('tailwindcss/defaultTheme');
import fluid, { extract, screens, fontSize } from 'fluid-tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    extract
  },
  theme: {
    extend: {
      fontFamily: {
        afacad: ['"AfacadFlux"', ...defaultTheme.fontFamily.sans],
        sans: ['"GeistRegular"', ...defaultTheme.fontFamily.sans],
        mono: ['"GeistMono"', ...defaultTheme.fontFamily.mono]
      },
      colors: {
        primary: '#fcba03',
        secondary: '#496080'
      }
    },
    screens,
    fontSize
  },
  plugins: [fluid, require('tailwindcss-motion')]
};
