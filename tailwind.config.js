/** @type {import('tailwindcss').Config} */
module.exports = {
  // Add the paths to all of your component files so Tailwind can find your classes
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")], 
  theme: {
    extend: {},
  },
  plugins: [],
}