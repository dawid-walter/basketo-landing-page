/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg-primary': '#0a0a0a',
        'dark-bg-secondary': '#121212',
        'dark-bg-tertiary': '#1a1a1a',
        'dark-bg-card': '#1e1e1e',
        'dark-text-primary': '#e0e0e0',
        'dark-text-secondary': '#a0a0a0',
        'dark-text-bright': '#f5f5f5',
        'electric-cyan': '#00f0ff',
        'electric-green': '#00ff88',
      },
      fontFamily: {
        heading: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(0, 240, 255, 0.5), 0 0 40px rgba(0, 240, 255, 0.3)',
        'glow-green': '0 0 20px rgba(0, 255, 136, 0.5), 0 0 40px rgba(0, 255, 136, 0.3)',
        'glow-cyan-sm': '0 0 10px rgba(0, 240, 255, 0.4)',
        'glow-green-sm': '0 0 10px rgba(0, 255, 136, 0.4)',
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(0, 240, 255, 0.5), 0 0 40px rgba(0, 240, 255, 0.3)',
          },
          '50%': {
            boxShadow: '0 0 30px rgba(0, 240, 255, 0.7), 0 0 60px rgba(0, 240, 255, 0.5)',
          },
        },
      },
    },
  },
  plugins: [],
}
