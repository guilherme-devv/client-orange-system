
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          'orange-light': '#F3953F',
          'orange-intense': '#F39200',
          'orange-dark': '#CB5616',
          'yellow-gold': '#F4C000',
          'yellow-light': '#FBE332',
          'yellow-pastel': '#F1E967',
          'blue-dark': '#242750',
          'blue-medium': '#005F9B',
          'blue-light': '#6EAAC1',
          'green-dark': '#479a36',
          'green-olive': '#617729',
          'green-lime': '#AFCC46',
          'gray-dark': '#5a5a5a',
          'gray-medium': '#8b8b8c',
          'gray-light': '#e5e4e4',
          'purple-dark': '#64358C',
          'purple-medium': '#a877b2',
          'pink-light': '#cf95c2',
          'green-neon': '#afca0b',
          'green-pastel': '#60b565',
          'green-soft': '#b9d583'
        }
      },
      fontFamily: {
        'primary': ['Gotham Rounded', 'sans-serif'],
        'secondary': ['Gotham', 'sans-serif'],
        'auxiliary': ['Roboto', 'sans-serif']
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
