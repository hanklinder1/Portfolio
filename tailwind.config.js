/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#EEF1F8',
          100: '#D4DBEE',
          200: '#A9B6DD',
          300: '#7E91CB',
          400: '#536DB9',
          500: '#3A52A0',
          600: '#2D4080',
          700: '#223162',
          800: '#1B2650',
          900: '#111840',
        },
        gold: {
          50:  '#FBF7EE',
          100: '#F5EDD6',
          200: '#EAD9A6',
          300: '#D4B97A',
          400: '#C29E52',
          500: '#B08633',
          600: '#8E6C27',
          700: '#6D521C',
          800: '#4B3812',
          900: '#2A1E08',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans:  ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
