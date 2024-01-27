import type { Config } from 'tailwindcss';
const colors = require('tailwindcss/colors');
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo[500],
        mint: '#64ffda',
        gold: '#D4AF37',
        primaryred: '#ff1744',
        blurple: '#6b66fa',
        secondary: '#1B1839',
        primary95: '#EBE8F5',
        greys1: '#424242',
        neutral90: '#DADADA',
        neutral95: '#F7F7F7',
        neutral: '#FFFFFF',
        peach: '#E76C6C',
        beige: '#FFE3E3',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
