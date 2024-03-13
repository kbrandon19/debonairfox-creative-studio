import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "sm": "375px",
        "md": "1024px",
        "lg": "1280px",
        "2xl": "1440px",
        "3xl": "1920px",
      },
    },
    extend: {
      colors: {
        //custom colors
        transparent: 'transparent',
        current: 'currentColor',
        white:'#FFFFFF',
        black:{
          main:'#000000',
          text:'#212427'
        },
        teal:'#1D5B80',
        //Light Blue
        primary:{
          default:'#6EA0C6',
          '100':'#A8C6DD',
          '200':'#8BB3D1',
        },
        //Green
        secondary:{
          default:'#50521D',
          '100':'#969777',
          '200':'#73754A',
        },
        //Tan
        neutral:{
          default:'#DBCEB4',
          '100':'#E9E2D2',
          '200':'#E2D8C3',
        },
        //Dark Blue
        accent:{
          default:'#24314B',
          '100':'#7C8393',
          '200':'#505A6F',
        },

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: '#E9E2D2',
        foreground: "hsl(var(--foreground))",

        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },

        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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

export default config;
