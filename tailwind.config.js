/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        roxo_padrao: "#6538E5",
      },
      fontFamily: {
        Inter: "Inter, sans-serif",
      }
    },
  },
  plugins: [],
}