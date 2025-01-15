module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        popIn: 'popIn 0.3s ease-out',
        fadeInLeft: 'fadeInLeft 0.5s ease-out',
        fadeInRightDelay: 'fadeInRightDelay 1.5s ease-out',
        fadeInUpDelay2: 'fadeInUpDelay2 2.5s ease-out',
        fadeInLeftDelay2: 'fadeInLeftDelay2 3s ease-out',
        fadeInRightDelay2: 'fadeInRightDelay2 3s ease-out',
        fadeInDelay: 'fadeInDelay 4s ease-out',
      },
      keyframes: {
        popIn: {
          '0%': { transform: 'scale(0.1)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        fadeInLeft: {
          '0%': { transform: 'translateX(-100px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        fadeInRightDelay: {
          '0%': { opacity: 0 },
          '67%': { transform: 'translateX(100px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        fadeInUpDelay2: {
          '0%': { opacity: 0 },
          '80%': { transform: 'translateY(40px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeInLeftDelay2: {
          '0%': { opacity: 0 },
          '85%': { transform: 'translateX(-100px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        fadeInRightDelay2: {
          '0%': { transform: 'scaleX(-1)', opacity: 0 },
          '85%': { transform: 'translateX(100px) scaleX(-1)', opacity: 0 },
          '100%': { transform: 'translateX(0) scaleX(-1)', opacity: 1 },
        },
        fadeInDelay: {
          '0%': { opacity: 0 },
          '80%': { transform: 'translateY(60px)', opacity: 0 },
          '100%': { transform: 'translateY(0px)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
