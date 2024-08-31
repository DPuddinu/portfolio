const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"GeistRegular"', ...defaultTheme.fontFamily.sans],
        mono: ['"GeistMono"', ...defaultTheme.fontFamily.mono]
      },
      colors: {
        primary: '#fcba03',
        secondary: '#496080'
      }
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    }
  },
  plugins: []
};
