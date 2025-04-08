/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-purple': 'var(--primary-purple)',
        'primary-coral': 'var(--primary-coral)',
        'primary-pink': 'var(--primary-pink)',
        'accent-navy': 'var(--accent-navy)',
        'purple-light': 'var(--purple-light)',
        'coral-light': 'var(--coral-light)',
        'pink-light': 'var(--pink-light)',
      },
    },
  },
  plugins: [],
} 