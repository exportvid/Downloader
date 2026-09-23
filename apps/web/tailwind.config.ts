import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: 'rgb(var(--base) / <alpha-value>)',
          surface: 'rgb(var(--surface) / <alpha-value>)',
          raised: 'rgb(var(--raised) / <alpha-value>)',
        },
        hl: 'rgb(var(--hl) / <alpha-value>)',
        line: 'rgb(var(--hl) / 0.08)',
        'line-strong': 'rgb(var(--hl) / 0.15)',
        ink: {
          DEFAULT: 'rgb(var(--ink) / <alpha-value>)',
          dim: 'rgb(var(--ink-dim) / <alpha-value>)',
          faint: 'rgb(var(--ink-faint) / <alpha-value>)',
          soft: 'rgb(var(--ink-soft) / <alpha-value>)',
        },
        head: {
          from: 'rgb(var(--head-from) / <alpha-value>)',
          via: 'rgb(var(--head-via) / <alpha-value>)',
        },
        danger: 'rgb(var(--danger) / <alpha-value>)',
        accent: {
          DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
          from: '#ffab5c',
          via: '#ff5a3c',
          to: '#c81f2e',
          dim: '#c8402c',
          contrast: '#1a0906',
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
        glow: '0 0 0 1px rgba(255,90,60,0.18), 0 10px 34px -10px rgba(255,90,60,0.35)',
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 20px 40px -24px rgba(0,0,0,0.55)',
      },
      backgroundImage: {
        'grid-fade': 'radial-gradient(ellipse 70% 55% at 50% -8%, rgba(255,138,61,0.16), transparent)',
        'brand-gradient': 'linear-gradient(135deg, #ffab5c 0%, #ff5a3c 55%, #c81f2e 100%)',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.23, 1, 0.32, 1)',
        'in-out': 'cubic-bezier(0.77, 0, 0.175, 1)',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 420ms cubic-bezier(0.23, 1, 0.32, 1) both',
      },
    },
  },
  plugins: [],
};

export default config;
