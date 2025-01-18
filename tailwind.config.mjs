/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      container: {
        screens: {
          xl: '896px',
        },
      },
    },
  },
  // plugins: [daisyui, tailwindcssAnimated],
  plugins: [daisyui],
  daisyui: {
    themes: [
      'light',
      {
        dark: {
          'base-100': '#000',
          'base-200': '#1e1e1e',
          'base-300': '#2e2e2e',
        },
      },
    ],
  },
}
