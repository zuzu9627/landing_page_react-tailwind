/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // de esta manera configuramos colores como root
      colors: {
        primary:"#706FE5",
      },
    },
  },
  plugins: [],
};
