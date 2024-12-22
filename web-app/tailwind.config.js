/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  fontFamily: {
    sans: [
      'system-ui',
      '-apple-system', // macOS and iOS
      'BlinkMacSystemFont', // macOS Safari
      '"Segoe UI"', // Windows
      'Roboto', // Android
      '"Helvetica Neue"', // macOS
      'Arial', // General fallback
      '"Noto Sans"', // Unicode fallback
      'sans-serif', // Default sans-serif
      '"Apple Color Emoji"', // Emoji support
      '"Segoe UI Emoji"', // Windows emoji
      '"Segoe UI Symbol"', // Windows symbol
    ],
    serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
    mono: [
      'Menlo',
      'Monaco',
      'Consolas',
      '"Liberation Mono"',
      '"Courier New"',
      'monospace',
    ],
  },
  theme: {
    extend: {
      colors: {
        black: {
          50: '#1c1c1c',
          100: '#171717',
          200: '#111111',
          300: '#0c0c0c',
          400: '#080808',
          500: '#000000',
          600: '#131313',
          700: '#242424',
          800: '#2e2e2e',
          base: '#000000',
        },
        white: {
          50: '#f5f5f5',
          100: '#eeeeee',
          200: '#e6e6e6',
          300: '#e0e0e0',
          400: '#d9d9d9',
          500: '#d2d2d2',
          600: '#cccccc',
          700: '#c5c5c5',
          800: '#bfbfbf',
          base: '#fff',
        },
        blue: {
          50: '#1c232e',
          100: '#1d2d3e',
          200: '#004164',
          300: '#005c8a',
          400: '#0872ad',
          500: '#0a7ec0',
          600: '#45a4e4',
          700: '#66b5e8',
          800: '#88c6ed',
          base: '#0a7ec0',
        },
        green: {
          50: '#202f2c',
          100: '#1b473a',
          200: '#006e49',
          300: '#009966',
          400: '#0aad76',
          500: '#06ba7d',
          600: '#40e4ad',
          700: '#59e8b7',
          800: '#80edc8',
          base: '#06ba7d',
        },
        pink: {
          50: '#312125',
          100: '#482135',
          200: '#800044',
          300: '#b20054',
          400: '#da0a62',
          500: '#ff196c',
          600: '#ff5391',
          700: '#ff6ba1',
          800: '#eb8daf',
          base: '#ff196c',
        },
        purple: {
          50: '#2e2231',
          100: '#3c2548',
          200: '#620080',
          300: '#7e00a4',
          400: '#8f08c1',
          500: '#9e10d9',
          600: '#c151e8',
          700: '#d16aeb',
          800: '#dd8bed',
          base: '#9e10d9',
        },
        yellow: {
          50: '#2c2b20',
          100: '#524a1d',
          200: '#876714',
          300: '#b88a00',
          400: '#d09b01',
          500: '#dfa604',
          600: '#f5bd3d',
          700: '#f7c45c',
          800: '#f3d28c',
          base: '#dfa604',
        },
        gray: {
          50: '#fcfdfd',
          100: '#f8f8f9',
          200: '#ededf0',
          300: '#e8e8eb',
          400: '#e4e5e9',
          500: '#dbdce1',
          600: '#bcbcc2',
          700: '#999a9d',
          800: '#6e6e71',
          900: '#58585a',
          1000: '#424244',
          1050: '#323233',
          1100: '#2c2c2d',
          1200: '#222222',
          1300: '#1a1a1b',
          1400: '#0f0f10',
        },
        'white-alpha': {
          50: '#fefefe', // Approximated
          100: '#fcfcfc', // Approximated
          200: '#fafafa', // Approximated
          300: '#f7f7f7', // Approximated
          400: '#f2f2f2', // Approximated
          500: '#e6e6e6', // Approximated
          600: '#d9d9d9', // Approximated
          700: '#cccccc', // Approximated
          800: '#b3b3b3', // Approximated
          900: '#999999', // Approximated
          1000: '#d9d9d9', // Approximated
        },
      },
    },
  },
  plugins: [],
};
