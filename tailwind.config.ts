import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#F3EBDD', // Primary background: light beige
          secondary: '#E9DECC', // Secondary background: warm beige
          card: '#FAF6EF', // Light surface for cards
          surface: '#FAF6EF',
          dark: '#0D274D', // Deep blue dark surface
        },
        blue: {
          accent: '#163A70', // Primary deep blue accent
          dark: '#0D274D',   // Dark blue
          secondary: '#24528C', // Secondary deep blue
          bright: '#2563EB', // Interactive accent
          soft: '#6B93C9',   // Soft blue
        },
        beige: {
          main: '#F3EBDD',      // main beige background
          secondary: '#E9DECC', // secondary beige
          surface: '#FAF6EF',   // light surface
          highlight: '#FFF9EF', // highlight beige
        },
        dark: {
          DEFAULT: '#111111',
          strong: '#080808',
          ui: '#151515',
        },
        border: {
          subtle: 'rgba(8, 8, 8, 0.08)',
          strong: 'rgba(22, 58, 112, 0.25)',
        },
        foreground: {
          DEFAULT: '#111111', // primary black text
          strong: '#080808',  // strong black text
          muted: '#151515',   // dark UI text
        },
        accent: {
          DEFAULT: '#163A70',
          interactive: '#2563EB',
          subtle: 'rgba(22, 58, 112, 0.08)',
          glow: 'rgba(107, 147, 201, 0.25)',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.18em',
      },
      lineHeight: {
        relaxed: '1.75',
      },
      boxShadow: {
        cinematic: '0 20px 40px -15px rgba(0, 0, 0, 0.85)',
        glow: '0 0 35px -5px rgba(37, 99, 235, 0.35)',
        'blue-sm': '0 0 15px rgba(37, 99, 235, 0.2)',
        'blue-lg': '0 0 40px rgba(59, 130, 246, 0.25)',
      },
    },
  },
  plugins: [],
} satisfies Config;
