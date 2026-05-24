
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        navy: 'var(--navy)',
        blue: 'var(--blue)',
        green: 'var(--green)',
        citrus: 'var(--citrus)',
        offwhite: 'var(--offwhite)',
        charcoal: 'var(--charcoal)',
        gray: 'var(--gray)',
      },
      fontFamily: {
        display: ['Anton', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'noise': "url('https://grainy-gradients.vercel.app/noise.svg')",
      }
    },
  },
  plugins: [],
}
