/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0%', transform:'translateY(1rem)' },
          '100%': { opacity: '100%',transform:'none' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s forwards',
      }
    }
  },
  plugins: [],
}

