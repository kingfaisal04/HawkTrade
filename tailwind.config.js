/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hawk': {
          'bg': 'var(--color-hawk-bg)',
          'surface': 'var(--color-hawk-surface)',
          'surface-2': 'var(--color-hawk-surface-2)',
          'surface-3': 'var(--color-hawk-surface-3)',
          'border': 'var(--color-hawk-border)',
          'border-2': 'var(--color-hawk-border-2)',
          'green': 'var(--color-hawk-green)',
          'green-light': 'var(--color-hawk-green-light)',
          'green-dark': 'var(--color-hawk-green-dark)',
          'green-glow': 'var(--color-hawk-green-glow)',
          'red': 'var(--color-hawk-red)',
          'red-light': 'var(--color-hawk-red-light)',
          'amber': 'var(--color-hawk-amber)',
          'blue': 'var(--color-hawk-blue)',
          'purple': 'var(--color-hawk-purple)',
          'text': 'var(--color-hawk-text)',
          'text-secondary': 'var(--color-hawk-text-secondary)',
          'text-muted': 'var(--color-hawk-text-muted)'
        }
      }
    },
  },
  plugins: [],
}
