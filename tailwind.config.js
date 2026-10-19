/** @type {import('tailwindcss').Config} */
// Theme values map to the design tokens in src/tokens.css so utilities stay token-locked.
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: 'var(--color-paper)',
        'paper-2': 'var(--color-paper-2)',
        'paper-3': 'var(--color-paper-3)',
        rule: 'var(--color-rule)',
        'rule-2': 'var(--color-rule-2)',
        neutral: 'var(--color-neutral)',
        muted: 'var(--color-muted)',
        ink: 'var(--color-ink)',
        'ink-2': 'var(--color-ink-2)',
        accent: 'var(--color-accent)',
        flood: 'var(--color-flood)',
        focus: 'var(--color-focus)',
        brand: {
          amber: 'var(--color-brand-amber)',
          orange: 'var(--color-brand-orange)',
          flame: 'var(--color-brand-flame)',
          red: 'var(--color-brand-red)',
          crimson: 'var(--color-brand-crimson)',
        },
      },
      fontFamily: {
        display: 'var(--font-display)',
        body: 'var(--font-body)',
        mono: 'var(--font-outlier)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        pill: 'var(--radius-pill)',
      },
    },
  },
  plugins: [],
}
