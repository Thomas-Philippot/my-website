/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  safelist: [
    {
      pattern: /bg-.+/
    },
    'mocha',
    'macchiato',
    'frappe',
    'latte'
  ],
  plugins: [
    require('@catppuccin/tailwindcss', {
      // which flavour of colours to use by default, in the `:root`
      defaultFlavour: 'latte'
    }),
  ],
}

