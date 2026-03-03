/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0F172A',
        mist: '#E2E8F0',
        slate: '#1E293B',
        accent: '#0E7490',
        accentSoft: '#ECFEFF',
      },
      boxShadow: {
        card: '0 16px 40px -20px rgba(15, 23, 42, 0.28)',
      },
      fontFamily: {
        display: ['"Avenir Next"', '"Trebuchet MS"', 'sans-serif'],
        sans: ['"Avenir"', '"Segoe UI"', '"Noto Sans"', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 600ms ease-out both',
      },
    },
  },
  plugins: [],
}
