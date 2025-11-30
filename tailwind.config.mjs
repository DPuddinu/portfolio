const defaultTheme = require('tailwindcss/defaultTheme');
import fluid, { extract, screens, fontSize } from 'fluid-tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    extract
  },
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        afacad: ['"AfacadFlux"', ...defaultTheme.fontFamily.sans],
        sans: ['"GeistRegular"', ...defaultTheme.fontFamily.sans],
        mono: ['"GeistMono"', ...defaultTheme.fontFamily.mono]
      },
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        background: 'rgb(var(--color-background) / <alpha-value>)',
        text: 'rgb(var(--color-text) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)'
      }
    },
    screens,
    fontSize
  },
  plugins: [fluid, require('tailwindcss-motion'), require('@tailwindcss/typography')]
};
