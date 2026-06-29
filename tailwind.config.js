/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#080808',
        surface: '#101010',
        surface2: '#181818',
        border: '#222222',
        acid: '#B8FF00',
        'acid-dim': '#8FCC00',
        white: '#F0F0F0',
        muted: '#555555',
        danger: '#FF2D2D',
      },
      fontFamily: {
        bebas: ['Bebas Neue', 'sans-serif'],
        'dm-mono': ['DM Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
