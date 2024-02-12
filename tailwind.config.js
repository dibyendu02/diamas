/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom1: ["Bacalisties", "sans-serif"],
      }
    },
    letterSpacing: {
      tighter: '-.05em',
    }
  },
  plugins: [],
};