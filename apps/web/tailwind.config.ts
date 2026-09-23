import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#0a0b0d',
          surface: '#111316',
          raised: '#17191d',
        },
        line: 'rgba(255,255,255,0.08)',
        'line-strong': 'rgba(255,255,255,0.14)',
        ink: {
          DEFAULT: '#f3f5f4',
          dim: '#a4aaa8',
          faint: '#6b7270',
        },
        accent: {
          DEFAULT: '#00e6a8',
          dim: '#0ba87f',
          contrast: '#04120d',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(0,230,168,0.15), 0 8px 30px -10px rgba(0,230,168,0.25)',
      },
      backgroundImage: {
        'grid-fade': 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,230,168,0.12), transparent)',
      },
    },
  },
  plugins: [],
};

export default config;
