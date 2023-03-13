/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'w': "#FFFFFF",
        'b1': "#EEF1FF",
        'b2': "#CFD7FC",
        'b3': "#6E87F7",
        'b4': "#252D52",
      }
    },
  },
  plugins: [],
}
