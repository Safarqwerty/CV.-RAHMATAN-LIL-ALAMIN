/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#DF6114",
        secondary: "#64748b",
        dark: "#1E1E1E",
      },
      spacing: {
        '1/5': '18%',
        '75': '23.7%',
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
}

