import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/constants/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-sans)', 'monospace'],
        geist: ['var(--font-geist-sans)'],
        inter: ['var(--font-inter)'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        hover: 'hsl(var(--hover))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        'slate-base': 'hsl(var(--slate-base))',
        'slate-surface': '#171719',
        'slate-muted': '#A3A3A3',
        'accent-teal': '#2DD4BF',
        'glass-border': 'var(--glass-border-value)',
        'surface-tint': '#89ceff',
        'on-surface-variant': 'hsl(var(--on-surface-variant))',
        'surface-container': 'hsl(var(--surface-container))',
        'surface-container-low': 'hsl(var(--surface-container-low))',
        'surface-container-high': 'hsl(var(--surface-container-high))',
        'primary-container': '#0ea5e9',
        'secondary-container': '#571bc1',
        'on-surface': 'hsl(var(--on-surface))',
        'on-primary': '#00344d',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        '2xl': '1.5rem',
        '3xl': '2rem',
        full: '9999px',
      },
      spacing: {
        'section-gap': '120px',
        'margin-desktop': '64px',
        'margin-mobile': '20px',
        gutter: '24px',
      },
      fontSize: {
        'headline-xl': [
          '48px',
          {
            lineHeight: '1.1',
            letterSpacing: '-0.04em',
            fontWeight: '700',
          },
        ],
        'headline-lg': [
          '32px',
          {
            lineHeight: '1.2',
            letterSpacing: '-0.02em',
            fontWeight: '600',
          },
        ],
        'headline-lg-mobile': [
          '28px',
          {
            lineHeight: '1.2',
            fontWeight: '600',
          },
        ],
        'body-md': [
          '16px',
          {
            lineHeight: '1.6',
            letterSpacing: '0em',
            fontWeight: '400',
          },
        ],
        'body-sm': [
          '14px',
          {
            lineHeight: '1.5',
            fontWeight: '400',
          },
        ],
        'label-caps': [
          '12px',
          {
            lineHeight: '1.0',
            letterSpacing: '0.1em',
            fontWeight: '600',
          },
        ],
        mono: [
          '14px',
          {
            lineHeight: '1.5',
            fontWeight: '400',
          },
        ],
      },
      animation: {
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%': { opacity: '0.3' },
          '100%': { opacity: '0.6' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
