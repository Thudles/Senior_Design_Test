/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
      colors: {
        projblack: "#111111",
        primary: "#6d14e0",
        secondary: "#ed3a51",
      },
      fontFamily: {
        oi: ['"Oi"', "cursive"], // Add your font here
      },
    },
  },
  plugins: [],
};
