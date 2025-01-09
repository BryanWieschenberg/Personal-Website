export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        moveDots: 'moveDots .5s linear infinite',
      },
      keyframes: {
        moveDots: {
          '0%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(10px, -10px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
      },
    },
  },
  plugins: [],
};
