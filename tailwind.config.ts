// tailwind.config.ts
import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Ensure all files in the src directory are included
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        autumn: {
          'primary': '#D97706',
          'secondary': '#A855F7',
          'accent': '#37CDBE',
          'neutral': '#3D4451',
          'base-100': '#FFFFFF',
          'base-120': '#fafafa',
          'info': '#3ABFF8',
          'success': '#36D399',
          'warning': '#FBBD23',
          'error': '#F87272',
        },
      },
    ],
  },
};

export default config;
