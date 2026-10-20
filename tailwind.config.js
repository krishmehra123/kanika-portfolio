/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FDFBF7',
          DEFAULT: '#F8F5EF',
          100: '#F4EFE6',
          200: '#EAE2D3',
          300: '#DFD4BF',
        },
        espresso: {
          light: '#523C34',
          DEFAULT: '#35251F',
          dark: '#241914',
          muted: '#5F4B43',
        },
        terracotta: {
          light: '#CF8467',
          DEFAULT: '#B96F50',
          dark: '#9A573B',
          soft: '#F4ECE8',
        },
        sage: {
          light: '#B4BFAB',
          DEFAULT: '#9AA58A',
          dark: '#768266',
          soft: '#EFF2EC',
        },
        sand: {
          DEFAULT: '#EFE9DD',
          dark: '#E2D8C7',
        }
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(53, 37, 31, 0.05)',
        'soft-md': '0 6px 18px -4px rgba(53, 37, 31, 0.07)',
        'soft-lg': '0 12px 32px -6px rgba(53, 37, 31, 0.09)',
        'soft-xl': '0 20px 40px -8px rgba(53, 37, 31, 0.12)',
      }
    },
  },
  plugins: [],
}
