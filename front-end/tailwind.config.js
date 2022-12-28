/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "nimble-white": "#f5f5f5",
        "gray-darkish": "#727D94",
        "dark-blue": "#021B51",
      }
    },
  },
  plugins: [],
}
