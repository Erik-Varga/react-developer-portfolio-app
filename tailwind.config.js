module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#0a192f',
        'color1': '#ccd6f6',
        'color2': '#8892b0',
        'color3': '#8892b0',
        'color4': 'white',
        'dark-primary': '#fff',
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}