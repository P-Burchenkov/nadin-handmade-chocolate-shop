/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      mob: '576px',
      // => @media (min-width: 576px) { ... }

      tab: '960px',
      // => @media (min-width: 960px) { ... }

      desk: '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    fontWeight: {
      regular: '400',
      medium: '500',
      semibold: '600',
    },
    container: {
      center: true,
      padding: {
        mob: '',
        tab: '',
        desk: '120px',
      },
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      yellow: '#FEFFD7',
      red: '#B00000',
      brown: '#592C26',
      green: '#165019',
      grey: '#0E0D0E',
      lightYellow: '#FFFFF1',
      lightBrown: '#D7B7B2',
      darkYellow: '#FDFFBE',
      darkBrown: '#47231E',
      pink: 'FF9090',
    },
    boxShadow: {
      basic: '0px 4px 5px 0px rgba(0, 0, 0, 0.25);',
    },
    extend: {
      fontFamily: {
        raleway: ['var(--font-raleway)'],
        allison: ['var(--font-allison)'],
      },
      backgroundImage: {
        hero: "url('/images/hero.jpg')",
      },
      spacing: {
        30: '120px',
        13: '52px',
        36: '36em',
      },
    },
  },
  plugins: [],
};
