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
          to: 'rgb(var(--head-to) / <alpha-value>)',
        },
        /** Text and icons drawn on top of bg-brand-gradient. */
        'on-brand': 'rgb(var(--on-brand) / <alpha-value>)',
        danger: 'rgb(var(--danger) / <alpha-value>)',
        /** ExportVid's own orange. Platform pages never change it, so the logo always looks like ExportVid. */
        ev: 'rgb(var(--ev) / <alpha-value>)',
        accent: {
          DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
          from: '#ffab5c',
          via: '#ff5a3c',
          to: '#c81f2e',
          dim: '#c8402c',
          contrast: 'rgb(var(--accent-contrast) / <alpha-value>)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      borderRadius: {
        xl2: '1.25rem',
        /** Button and input corners. Platform pages change these to match the platform's own buttons. */
        brand: 'var(--btn-radius)',
        'brand-sm': 'var(--btn-radius-sm)',
      },
      boxShadow: {
        glow: 'var(--btn-shadow)',
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 20px 40px -24px rgba(0,0,0,0.55)',
      },
      backgroundImage: {
        'grid-fade': 'radial-gradient(ellipse 70% 55% at 50% -8%, rgba(255,138,61,0.16), transparent)',
        'brand-gradient': 'var(--brand-gradient)',
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
