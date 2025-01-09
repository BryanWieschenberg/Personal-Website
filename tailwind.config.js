module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        popIn: 'popIn 0.3s ease-out',
        fadeInLeft: 'fadeInLeft 0.5s ease-out'
      },
      keyframes: {
        popIn: {
          '0%': { transform: 'scale(0.1)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        fadeInLeft: {
          '0%': { transform: 'translateX(-100px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        }
      },
    },
  },
  plugins: [],
};
