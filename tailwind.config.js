/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', // Enables Just-In-Time mode
  content: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./**/*.liquid", // Include Liquid files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
