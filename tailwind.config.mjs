/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Deep forest green — authority, trust, Islamic
        forest: {
          50:  '#f0f7f3',
          100: '#dcede3',
          200: '#b9dbc9',
          300: '#8ec2a8',
          400: '#5ea280',
          500: '#3d8562',
          600: '#2d6b4f',
          700: '#255640',
          800: '#1e4433',
          900: '#0d4429',  // PRIMARY
          950: '#071f13',
        },
        // Warm gold — prestige, Islamic heritage
        amber: {
          300: '#e8c97a',
          400: '#d4a843',
          500: '#c9963a',  // PRIMARY ACCENT
          600: '#a87830',
          700: '#8a5f24',
        },
        // Warm parchment — backgrounds, not clinical white
        parchment: {
          50:  '#fdfaf4',
          100: '#faf7f0',
          200: '#f5eedd',
          300: '#eddfc8',
        },
        // Deep charcoal for text
        ink: {
          800: '#1a2332',
          900: '#0f1623',
        },
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
        body:    ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        arabic:  ['"Amiri"', 'serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
        '8xl': ['6rem',     { lineHeight: '1', letterSpacing: '-0.02em' }],
        '9xl': ['8rem',     { lineHeight: '1', letterSpacing: '-0.03em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'sm':        '0 1px 3px rgba(13,68,41,0.06), 0 1px 2px rgba(13,68,41,0.04)',
        'md':        '0 4px 16px rgba(13,68,41,0.08), 0 2px 6px rgba(13,68,41,0.04)',
        'lg':        '0 8px 32px rgba(13,68,41,0.10), 0 4px 12px rgba(13,68,41,0.06)',
        'xl':        '0 16px 48px rgba(13,68,41,0.12), 0 8px 20px rgba(13,68,41,0.07)',
        '2xl':       '0 24px 64px rgba(13,68,41,0.15), 0 12px 28px rgba(13,68,41,0.08)',
        'card':      '0 2px 12px rgba(13,68,41,0.07), 0 1px 4px rgba(13,68,41,0.04)',
        'card-hover':'0 12px 36px rgba(13,68,41,0.13), 0 4px 14px rgba(13,68,41,0.07)',
        'gold':      '0 8px 28px rgba(201,150,58,0.35)',
        'glow':      '0 0 40px rgba(13,68,41,0.20)',
        'inner-top': 'inset 0 2px 8px rgba(13,68,41,0.08)',
      },
      backgroundImage: {
        // Subtle Islamic star pattern
        'pattern-star': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M30 5l4.5 13.8H48L37.3 26.7l4.3 13.8L30 32l-11.7 8.5 4.3-13.8L12 18.8h13.5z' fill='none' stroke='%230d4429' stroke-opacity='0.06' stroke-width='1'/%3E%3C/svg%3E\")",
        'pattern-dots': "url(\"data:image/svg+xml,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='3' cy='3' r='1.5' fill='%230d4429' fill-opacity='0.07'/%3E%3C/svg%3E\")",
        'gradient-forest': 'linear-gradient(135deg, #071f13 0%, #0d4429 50%, #1e4433 100%)',
        'gradient-hero':   'linear-gradient(160deg, rgba(7,31,19,0.92) 0%, rgba(13,68,41,0.80) 50%, rgba(30,68,51,0.70) 100%)',
        'gradient-card':   'linear-gradient(135deg, #0d4429 0%, #255640 100%)',
        'gradient-gold':   'linear-gradient(135deg, #c9963a 0%, #d4a843 100%)',
        'gradient-warm':   'linear-gradient(180deg, #fdfaf4 0%, #faf7f0 100%)',
      },
      animation: {
        'float':       'float 4s ease-in-out infinite',
        'pulse-soft':  'pulseSoft 3s ease-in-out infinite',
        'slide-up':    'slideUp 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards',
        'fade-in':     'fadeIn 0.5s ease forwards',
        'marquee':     'marquee 20s linear infinite',
      },
      keyframes: {
        float:      { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        pulseSoft:  { '0%,100%': { opacity: '1' }, '50%': { opacity: '0.7' } },
        slideUp:    { from: { opacity: '0', transform: 'translateY(24px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        fadeIn:     { from: { opacity: '0' }, to: { opacity: '1' } },
        marquee:    { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
      },
      transitionTimingFunction: {
        'spring':    'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'smooth':    'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
