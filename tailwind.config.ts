/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-text': 'var(--color-brand-text)',
        border: 'var(--color-border)', // light-gray
        input: 'var(--color-input)', // white
        ring: 'var(--color-ring)', // green
        background: 'var(--color-background)', // white
        foreground: 'var(--color-foreground)', // near-black
        primary: {
          DEFAULT: 'var(--color-primary)', // bright green - use ONLY for backgrounds
          foreground: 'var(--color-primary-foreground)', // navy for text on green backgrounds
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', // navy
          foreground: 'var(--color-secondary-foreground)', // white
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', // red
          foreground: 'var(--color-destructive-foreground)', // white
        },
        muted: {
          DEFAULT: 'var(--color-muted)', // light-gray
          foreground: 'var(--color-muted-foreground)', // navy
        },
        accent: {
          DEFAULT: 'var(--color-accent)', // hover-green
          foreground: 'var(--color-accent-foreground)', // navy
        },
        popover: {
          DEFAULT: 'var(--color-popover)', // white
          foreground: 'var(--color-popover-foreground)', // near-black
        },
        card: {
          DEFAULT: 'var(--color-card)', // white
          foreground: 'var(--color-card-foreground)', // near-black
        },
        success: {
          DEFAULT: 'var(--color-success)', // success-green
          foreground: 'var(--color-success-foreground)', // white
        },
        warning: {
          DEFAULT: 'var(--color-warning)', // orange
          foreground: 'var(--color-warning-foreground)', // white
        },
        error: {
          DEFAULT: 'var(--color-error)', // red
          foreground: 'var(--color-error-foreground)', // white
        },
        'text-primary': 'var(--color-text-primary)', // navy
        'text-secondary': 'var(--color-text-secondary)', // near-black
        surface: 'var(--color-surface)', // light-gray
      },
      fontFamily: {
        'gilroy': ['Gilroy', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'jetbrains': ['JetBrains Mono', 'monospace'],
      },
      fontWeight: {
        'gilroy-regular': '400',
        'gilroy-semibold': '600',
        'gilroy-bold': '700',
        'inter-regular': '400',
        'inter-medium': '500',
        'jetbrains-regular': '400',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'lg': '8px',
        'md': '6px',
        'sm': '4px',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(27, 32, 51, 0.08)',
        'card-strong': '0 8px 40px rgba(27, 32, 51, 0.12)',
        'subtle': '0 2px 8px rgba(27, 32, 51, 0.06)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'scale-in': 'scaleIn 0.2s ease-out',
        'bounce-gentle': 'bounceGentle 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceGentle: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
  ],
}