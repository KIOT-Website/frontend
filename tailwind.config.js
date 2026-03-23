/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#224292",
          medium: "#64779F",
          light: "#A9B1C3",
        },
        accent: {
          gold: "#D0BC94",
        },
        bg: {
          white: "#FCFDFD",
          tint: "#D5E2F4",
        }
      },
      fontFamily: {
        ans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
