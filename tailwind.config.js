/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f4f7f5',
          100: '#e5ece8',
          200: '#ccdad2',
          300: '#a4bfae',
          400: '#759d85',
          500: '#537f64',
          600: '#40664f',
          700: '#345240',
          800: '#2b4335',
          900: '#24382d',
          950: '#0a1a12',
        },
        sage: {
          50: '#f5f8f4',
          100: '#e8efe6',
          200: '#d2e0cd',
          300: '#aecba6',
          400: '#88b07c',
          500: '#6b9459',
          600: '#527843',
          700: '#405d36',
          800: '#344b2e',
          900: '#2b3e27',
          950: '#162113',
        },
        cream: {
          50: '#fdfcf9',
          100: '#faf7f0',
          200: '#f5efe1',
          300: '#ede2c9',
        },
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 20px -2px rgba(31, 58, 43, 0.08)',
        card: '0 8px 30px -6px rgba(31, 58, 43, 0.12)',
        glow: '0 0 0 4px rgba(107, 148, 89, 0.15)',
      },
      backgroundImage: {
        'hero-grain': "radial-gradient(circle at 1px 1px, rgba(31,58,43,0.04) 1px, transparent 0)",
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(1.4)', opacity: '0' },
          '100%': { opacity: '0' },
        },
        'float': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both',
        'fade-in': 'fade-in 0.6s ease both',
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.16,1,0.3,1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
};
