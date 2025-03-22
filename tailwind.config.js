/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        light: '#f7fced',
        lightCover: '#f3fbe3',
        lightActive: '#e7f6c6',
        normal: '#b1e346',
        normalHover: '#9fcc3f',
        normalActive: '#8eb638',
        dark: '#85aa35',
        darkHover: '#6a882a',
        darkActive: '#50661f',
        darker: '3e4f19'
      },
    },
  },
  plugins: [],
}