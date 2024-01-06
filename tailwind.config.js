/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xxsm: "300px",
      xsm: "450px",
      ssm:'500px',
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
    },
    fontFamily: {
      Inter: " 'Inter', sans-serif",
    },
    extend: {},
  },
  plugins: [],
};
