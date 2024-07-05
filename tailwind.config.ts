// tailwind.config.ts
import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Ensure all files in the src directory are included
  ],
  theme: {
    extend: {
      colors: {
        lavender: {
          50: '#f8f7fe',
          100: '#f1effe',
          200: '#e3dffd',
          300: '#d5cffc',
          400: '#b9affa',
          500: '#9d8ff8',
          600: '#8d80df',
          700: '#766aba',
          800: '#5e5594',
          900: '#4d4579',
        },
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        neutral: 'var(--neutral)',
        'base-100': 'var(--base-100)',
        'base-100-light': 'var(--base-100-light)',
        'base-100-very-light': 'var(--base-100-very-light)',
        'text-color': 'var(--text-color)',
        info: 'var(--info)',
        success: 'var(--success)',
        warning: 'var(--warning)',
        error: 'var(--error)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        autumn: {
          'primary': 'var(--primary)',
          'secondary': 'var(--secondary)',
          'accent': 'var(--accent)',
          'neutral': 'var(--neutral)',
          'base-100': 'var(--base-100)',
          'info': 'var(--info)',
          'success': 'var(--success)',
          'warning': 'var(--warning)',
          'error': 'var(--error)',
        },
      },
    ],
  },
};

export default config;