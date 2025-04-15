
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        'primary': ['Gotham Rounded', 'sans-serif'],
        'secondary': ['Gotham', 'sans-serif'],
        'auxiliary': ['Roboto', 'sans-serif']
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
