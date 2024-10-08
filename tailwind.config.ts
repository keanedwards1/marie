import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'lg-xl': '1080px',
      },
      scale: {
        '105': '1.05',
      },
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
        'base-100': '#ffffff', // Set to white
        'base-100-light': 'var(--base-100-light)',
        'base-100-darker': 'var(--base-100-darker)',
        'base-100-very-light': 'var(--base-100-very-light)',
        'text-color': 'var(--text-color)',
        info: 'var(--info)',
        success: 'var(--success)',
        warning: 'var(--warning)',
        error: 'var(--error)',
        purple: {
          100: '#F3E8FF',
          500: '#8B5CF6',
          800: '#5B21B6',
        },
        pink: {
          100: '#FCE7F3',
        },
        rose: {
          600: '#E11D48',
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
  ],
  daisyui: {
    themes: [
      {
        autumn: {
          'primary': '#dfbdf7',
          'secondary': '#84ceeb',
          'accent': '#5ab9ea',
          'neutral': '#c1c8e4',
          'base-100': '#ffffff', // Set to white
          'info': '#60A5FA',
          'success': '#34D399',
          'warning': '#FBBF24',
          'error': '#F87171',
        },
      },
    ],
  },
};

export default config;