import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        'primary': '#F5B32E',
        'on-primary': '#462e00'
      },
      backgroundImage: {
        // gridbg: "url('/img/grid.png')",
      },
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"]
      }
    }
  },

  plugins: [typography, forms, containerQueries, aspectRatio, require('tailwind-scrollbar')]
} as Config;
