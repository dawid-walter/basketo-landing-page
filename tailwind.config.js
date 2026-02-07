/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        basketo: {
          // Primary Brand Colors
          primary: {
            DEFAULT: '#3B82F6',
            dark: '#2563EB',
            light: '#60A5FA',
            50: '#EFF6FF',
            100: '#DBEAFE',
          },
          // Accent Colors
          accent: {
            DEFAULT: '#8B5CF6',
            dark: '#7C3AED',
            light: '#A78BFA',
          },
          // Semantic Colors
          success: {
            DEFAULT: '#10B981',
            dark: '#059669',
            light: '#34D399',
          },
          warning: {
            DEFAULT: '#F59E0B',
            dark: '#D97706',
            light: '#FBBF24',
          },
          error: {
            DEFAULT: '#EF4444',
            dark: '#DC2626',
            light: '#F87171',
          },
        },
        // Keep 'primary' alias for backward compatibility
        primary: '#3B82F6',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'basketo': '0.5rem',
        'basketo-lg': '0.75rem',
        'basketo-xl': '1rem',
      },
      boxShadow: {
        'basketo-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'basketo': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'basketo-md': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'basketo-lg': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
