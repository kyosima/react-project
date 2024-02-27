/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "vy-jang": "#305B81",
      },
    },
    screens: {
      sm: "380px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },

  plugins: [],
};
