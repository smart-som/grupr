/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          400: "#504CA4",
          300: "#757084",
          100: "#F6F4FC",
          200: "#898595",
        },
        orange: {
          500: "#FCB036",
          100: "#FFF5E5",
        },
      },
    },
  },
  plugins: [],
};
