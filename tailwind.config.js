/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { 
        pinky: '#FF8A75', // Soft Coral
        lilac: '#FFB088', // Warm Peach
        peach: '#FFD3B6', // Light Cream
        mint: '#64DCC0'   // Soft Mint Green (bhal f l-dot)
      },
      borderRadius: { '4xl': '2rem', '5xl': '2.75rem' },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Outfit', 'system-ui', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
      },
    },
  },
  plugins: [],
}