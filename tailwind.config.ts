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
    },
    screens: {
        "sm": "375px",
        "smd":"768px",
        "md": "1024px",
        "lg": "1280px",
        "2xl": "1440px",
        "3xl": "1920px",
      },
      fontSize: {
       
        xs: '0.6875rem', //11px
        sm: '0.875rem', //14px
        base: '1rem', //16px
        l: '1.25rem',//20px
        xl: '1.5rem', //24px
        Xl: '2rem' //32px
        
      },
    
    extend: {
      fontSize:{
        secTitle: '2.5rem', //40px
        titleMid: '3rem',
        titleSmd:'4rem',
        titleSm:'5rem', //80px
        titleMd:'6.25rem', //100px
        titleLg:'9.375rem', //150px
        titleXl:'12.5rem', //200px
      },
      lineHeight:{
        titleSm:'4.3rem', //80px
      },
      colors: {
        //custom colors
        transparent: 'transparent',
        current: 'currentColor',
        white:'#F4F4F4',
        black:{
          main:'#000000',
          text:'#212427'
        },
        tangerine:'#F08700',
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
        //Florece Colors
        'fc-charcoal':'#353A47',
        'fc-plum':'#E0A1D1',
        'fc-white':'#FAF9F9',
    background: '#E9E2D2',
      },
  },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@xpd/tailwind-3dtransforms")
  ],
} satisfies Config;

export default config;
