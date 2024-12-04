export default {
  content: [
    './index.html',                // Root index.html for Vite
    './src/**/*.{js,jsx,ts,tsx}',  // All JavaScript/TypeScript files in src
  ],
  theme: {
    extend: {
      animation: {
        moveDots: 'moveDots 5s linear infinite',
      },
      keyframes: {
        moveDots: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        },
      },
    },
  },
  plugins: [],
};
