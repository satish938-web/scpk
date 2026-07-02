export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FBF4EF',
        cream: '#F4E9DD',
        'rose-deep': '#A6234B',
        'rose-soft': '#E8B4C0',
        maroon: '#3A1420',
        gold: '#C7A046',
        charcoal: '#2B2320',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Jost', 'Helvetica Neue', 'sans-serif'],
      },
      backgroundImage: {
        'stitched-divider': 'repeating-linear-gradient(to right, #A6234B 0, #A6234B 6px, transparent 6px, transparent 12px)',
      }
    },
  },
  plugins: [],
}
