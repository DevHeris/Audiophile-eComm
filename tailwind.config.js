/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
    },
    extend: {
      height: {
        screen: "100dvh",
      },
      colors: {
        secondary: "#d87d4a",
      },
      backgroundImage: {
        "hero-image": "url('/src/assets/home/desktop/image-hero.jpg')",
      },
    },
  },
  plugins: [],
};
