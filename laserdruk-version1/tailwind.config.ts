import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'display': ['Oswald', 'sans-serif'],
      'body': ['PT_Sans', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'hero-img': "url('/Frame6.jpg')",
        'car-wrap': "url('/carWrap.jpg')",
        'shirt-print': "url('/shirt.jpg')",
        'stamp-img': "url('/stamp.jpg')",
        'logo': "url('/las3.png')"
      }
    },
  },
  plugins: [],
} satisfies Config;
