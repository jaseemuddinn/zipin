/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: 'var(--color-theme)',
        }
      },
      backgroundColor: {
        skin: {
          fill: 'var(--color-theme)',
        }
      },
      borderColor: {
        skin: {
          base: 'var(--color-theme)',
        }
      },
    },
  },
  plugins: [],
}