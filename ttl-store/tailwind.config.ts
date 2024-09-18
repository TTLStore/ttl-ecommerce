import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./hoc/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'mobile': { max: '639px' },
      'tablet': { min: '640px', max: '1023px' },
      'desktop': { min: '1024px' }
    },
    extend: {
      colors: {
        primary: {
          light: '#e7eaf6',
          'light-hover': '#dbdff1',
          'light-active': '#b5bde3',
          DEFAULT: '#0f2ba4',
          'normal-hover': '#0e2794',
          'normal-active': '#0c2283',
          dark: '#0b207b',
          'dark-hover': '#091a62',
          'dark-active': '#07134a',
          darker: '#050f39',
        },
        neutral: {
          black: {
            light: '#e6e6e6', // Light
            'light-hover': '#d9d9d9', // Light :hover
            'light-active': '#b0b0b0', // Light :active
            DEFAULT: '#000000', // Normal
            'normal-hover': '#000000', // Normal :hover
            'normal-active': '#000000', // Normal :active
            dark: '#000000', // Dark
            'dark-hover': '#000000', // Dark :hover
            'dark-active': '#000000', // Dark :active
            darker: '#000000', // Darker
          },
          white: {
            light: '#ffffff', // Light
            'light-hover': '#ffffff', // Light :hover
            'light-active': '#ffffff', // Light :active
            DEFAULT: '#ffffff', // Normal
            'normal-hover': '#e6e6e6', // Normal :hover
            'normal-active': '#cccccc', // Normal :active
            dark: '#bfbfbf', // Dark
            'dark-hover': '#999999', // Dark :hover
            'dark-active': '#737373', // Dark :active
            darker: '#595959', // Darker
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
