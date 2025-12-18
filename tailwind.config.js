/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FBF9F6',
        teal: {
          DEFAULT: '#2F8F8F',
          light: '#3FA5A5',
          dark: '#256F6F',
        },
        gold: {
          DEFAULT: '#C99A52',
          light: '#D4AD6F',
          dark: '#B38842',
        },
        charcoal: {
          DEFAULT: '#1E1E1E',
          light: '#2A2A2A',
        },
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
        noto: ['Noto Sans', 'sans-serif'],
        arabic: ['Noto Naskh Arabic', 'serif'],
      },
    },
  },
  plugins: [],
};
