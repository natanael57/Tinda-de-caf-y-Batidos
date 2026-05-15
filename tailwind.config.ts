import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6F4E37',
        'primary-hover': '#8B6F47',
        'primary-light': '#A0826D',
        secondary: '#00704A',
        'secondary-hover': '#00834A',
        accent: '#D4A574',
        'accent-light': '#F5E6D3',
        'text-light': '#999999',
        'bg-secondary': '#F5F5F0',
        'bg-tertiary': '#EEEEEE',
        'bg-dark': '#1A1A1A',
        'border-light': '#F0F0F0',
      },
      textColor: {
        primary: '#6F4E37',
        secondary: '#666666',
        light: '#999999',
      },
      backgroundColor: {
        secondary: '#F5F5F0',
        tertiary: '#EEEEEE',
        dark: '#1A1A1A',
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out',
        'slide-in-up': 'slide-in-up 0.4s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'slide-in-up': {
          from: {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'scale-in': {
          from: {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          to: {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
