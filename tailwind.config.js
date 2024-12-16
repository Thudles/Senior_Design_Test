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
        primary: "#7c3aed",
        secondary: "#ed3a51",
      },
      fontFamily: {
        bubbly: ['"Bubblegum Sans"', "cursive"], // Add your font here
      },
    },
  },
  plugins: [],
};
