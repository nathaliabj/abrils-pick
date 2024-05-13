/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: { 80: "80%" },
      maxWidth: { 800: "800px" },
      screens: {
        lg: "960px",
      },
    },
  },
  plugins: [],
};
