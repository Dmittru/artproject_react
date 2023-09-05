/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      grayscale: {
        50: '50%',
        75: '75%',
        85: '85%',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

