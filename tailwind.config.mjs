/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        void: '#000000',
        royal: '#0044AA',
        'royal-light': '#0055CC',
        'royal-dim': '#003388',
        frost: '#F5F7FA',
        'frost-dim': '#A0A8B5',
        rule: '#1A1F2B',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.3em',
      },
    },
  },
  plugins: [],
}
