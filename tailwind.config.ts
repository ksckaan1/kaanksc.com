import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

const token = (name: string) => `rgb(var(--md-${name}) / <alpha-value>)`;

export default {
  content: ['./src/**/*.{html,js,svelte,ts,svx,md}'],
  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        'primary': token('primary'),
        'on-primary': token('on-primary'),
        'primary-container': token('primary-container'),
        'on-primary-container': token('on-primary-container'),
        'secondary': token('secondary'),
        'on-secondary': token('on-secondary'),
        'secondary-container': token('secondary-container'),
        'on-secondary-container': token('on-secondary-container'),
        'tertiary': token('tertiary'),
        'on-tertiary': token('on-tertiary'),
        'tertiary-container': token('tertiary-container'),
        'on-tertiary-container': token('on-tertiary-container'),
        'error': token('error'),
        'on-error': token('on-error'),
        'error-container': token('error-container'),
        'on-error-container': token('on-error-container'),
        'surface': token('surface'),
        'on-surface': token('on-surface'),
        'surface-variant': token('surface-variant'),
        'on-surface-variant': token('on-surface-variant'),
        'surface-container-lowest': token('surface-container-lowest'),
        'surface-container-low': token('surface-container-low'),
        'surface-container': token('surface-container'),
        'surface-container-high': token('surface-container-high'),
        'surface-container-highest': token('surface-container-highest'),
        'outline': token('outline'),
        'outline-variant': token('outline-variant'),
        'inverse-surface': token('inverse-surface'),
        'inverse-on-surface': token('inverse-on-surface'),
        'inverse-primary': token('inverse-primary'),
      },
      fontFamily: {
        sans: ['"Roboto Flex"', 'Roboto', 'sans-serif'],
      },
    },
  },

  plugins: [typography, forms, containerQueries, aspectRatio, require('tailwind-scrollbar')],
} as Config;
