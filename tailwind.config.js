/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
       fontFamily: {
        playfair: ["Playfair Display", "serif"],
      },
      colors: {
        primary: "#006400",   // Dark Navy Blue
        secondary: "#FFF0DD", // Deep Blue
        accent: "#FCFFFF",    // Soft White
      },
    },
  },
  plugins: [],
}

