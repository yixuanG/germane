/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/renderer/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#080A0F',
        surface: '#10131A',
        elevated: '#151A24',
        line: 'rgba(255,255,255,0.08)',
        primary: '#F4F4F5',
        secondary: '#A1A1AA',
        muted: '#52525B',
        accent: {
          green: '#7CFFB2',
          violet: '#A78BFA',
          cyan: '#67E8F9',
        },
        feedback: {
          error: '#FB7185',
          success: '#86EFAC',
          warning: '#FACC15',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Geist', 'SF Pro Display', 'SF Pro Text', 'system-ui', 'sans-serif'],
        serif: ['Literata', 'Source Serif 4', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'IBM Plex Mono', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(124,255,178,0.14)',
        violet: '0 0 50px rgba(167,139,250,0.12)',
        cyan: '0 0 34px rgba(103,232,249,0.12)',
      },
      keyframes: {
        'soft-pop': {
          '0%': { transform: 'scale(0.98)', opacity: '0.7' },
          '55%': { transform: 'scale(1.015)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'success-pulse': {
          '0%, 100%': { boxShadow: '0 0 0 rgba(124,255,178,0)' },
          '50%': { boxShadow: '0 0 42px rgba(124,255,178,0.26)' },
        },
      },
      animation: {
        'soft-pop': 'soft-pop 240ms ease-out both',
        'success-pulse': 'success-pulse 900ms ease-out both',
      },
    },
  },
  plugins: [],
}
