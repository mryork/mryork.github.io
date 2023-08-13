/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue-gray": "#192129",
      },
      fontFamily: {
        pacifico: ["Pacifico", "cursive"],
        bricolagegrotesque: ["Bricolage Grotesque", "sans-serif"],
      },
      keyframes: {
        backgroundmove: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      backgroundSize: {
        "800%": "800%",
      },
      animation: {
        gradient: "backgroundmove 8s ease infinite alternate",
      },
    },
  },
  plugins: [],
};
