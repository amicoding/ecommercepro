/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      'josef': ["Josefin Sans", "sans-serif"],
      'lato': ["Lato", "sans-serif"]
      
    },
  },
  plugins: [],
}
