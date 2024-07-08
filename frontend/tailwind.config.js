/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          100: "#FCE4EC",
          200: "#F8BBD0",
          300: "#F48FB1",
          400: "#F06292",
          500: "#EC407A",
          600: "#E91E63",
          700: "#D81B60",
          800: "#C2185B",
          900: "#AD1457",
        },
      },
    },
  },
  plugins: [],
};
