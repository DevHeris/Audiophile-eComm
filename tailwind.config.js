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
        primary: "#191919",
        secondary: "#d87d4a",
        "secondary-hover": "#ec9f72",
      },
      backgroundImage: {
        "hero-image-mobile": "url('/src/assets/home/mobile/image-header.jpg')",
        "hero-image-tablet": "url('/src/assets/home/tablet/image-header.jpg')",
        "hero-image-desktop": "url('/src/assets/home/desktop/image-hero.jpg')",
      },
    },
  },
  plugins: [],
};
