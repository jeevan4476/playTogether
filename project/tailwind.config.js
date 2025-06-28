/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        // Light mode - Warm and inviting palette
        light: {
          primary: '#FF6B6B',      // Coral red
          secondary: '#4ECDC4',    // Turquoise
          accent: '#45B7D1',       // Sky blue
          success: '#96CEB4',      // Mint green
          warning: '#FFEAA7',      // Soft yellow
          error: '#FF7675',        // Light red
          surface: '#FFFFFF',      // Pure white
          background: '#FFF8F3',   // Warm white
          card: '#FFFFFF',         // Card background
          text: {
            primary: '#2D3436',    // Dark charcoal
            secondary: '#636E72',  // Medium gray
            muted: '#B2BEC3',      // Light gray
          },
          border: '#E8E8E8',       // Very light gray
        },
        // Dark mode - Keep existing dark colors
        dark: {
          primary: '#10b981',
          secondary: '#3b82f6',
          accent: '#8b5cf6',
          success: '#22c55e',
          warning: '#f59e0b',
          error: '#ef4444',
          surface: '#1f2937',
          background: '#111827',
          card: '#1f2937',
          text: {
            primary: '#f9fafb',
            secondary: '#d1d5db',
            muted: '#9ca3af',
          },
          border: '#374151',
        },
        // Gradient colors for light mode
        gradient: {
          coral: '#FF6B6B',
          peach: '#FF8E8E',
          turquoise: '#4ECDC4',
          mint: '#6FFFE9',
          sky: '#45B7D1',
          lavender: '#A8E6CF',
        },
      },
      backgroundImage: {
        'light-gradient': 'linear-gradient(135deg, #FFF8F3 0%, #FFE8E1 25%, #E8F8F5 50%, #E1F5FE 75%, #FFF8F3 100%)',
        'light-card': 'linear-gradient(135deg, #FFFFFF 0%, #FEFEFE 100%)',
        'coral-gradient': 'linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)',
        'turquoise-gradient': 'linear-gradient(135deg, #4ECDC4 0%, #6FFFE9 100%)',
        'sky-gradient': 'linear-gradient(135deg, #45B7D1 0%, #A8E6CF 100%)',
        'warm-gradient': 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 50%, #45B7D1 100%)',
      },
      boxShadow: {
        'light-soft': '0 2px 15px -3px rgba(255, 107, 107, 0.1), 0 4px 6px -2px rgba(255, 107, 107, 0.05)',
        'light-medium': '0 4px 25px -5px rgba(255, 107, 107, 0.15), 0 10px 10px -5px rgba(255, 107, 107, 0.04)',
        'light-strong': '0 10px 40px -10px rgba(255, 107, 107, 0.25), 0 20px 25px -5px rgba(255, 107, 107, 0.1)',
        'turquoise-glow': '0 0 20px rgba(78, 205, 196, 0.3)',
        'coral-glow': '0 0 20px rgba(255, 107, 107, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(255, 107, 107, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(255, 107, 107, 0.4)' },
        },
      },
    },
  },
  plugins: [],
};