/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray": "#A1A8B8",
        "gray-darkish": "#727D94",
        "dark-blue": "#021B51",
        "dark-gray": "#4D5566",
        "main-green": "#00AD8C",
        "nimble-gray": "#DFE2EB",
        "nimble-white": "#FAFAFA",
        "soft-blue": "#CAD3FF",
        "soft-gray": "#f0eded",
      }
    },
  },
  plugins: [],
}
