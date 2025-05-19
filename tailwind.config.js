/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // optional if using Next.js app directory
  ],
  theme: {
    extend: {
      animation: {
        rotateCW: 'rotateCW var(--rotate-speed) linear infinite',
        rotateCCW: 'rotateCCW var(--rotate-speed) linear infinite',
      },
      keyframes: {
        rotateCW: {
          from: { transform: 'translate3d(0px, -50%, -1px) rotate(-45deg)' },
          to: { transform: 'translate3d(0px, -50%, 0px) rotate(-315deg)' },
        },
        rotateCCW: {
          from: { transform: 'rotate(45deg)' },
          to: { transform: 'rotate(315deg)' },
        },
      },
    },
  
    }
  };