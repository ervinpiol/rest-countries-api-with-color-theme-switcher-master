/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Nunito: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        DarkBackground: "hsl(207, 26%, 17%)",
        DarkTextColor: "hsl(0, 0%, 100%)",
        DarkElements: "hsl(209, 23%, 22%)",
        LightBackground: "hsl(0, 0%, 98%)",
        TextColor: "hsl(200, 15%, 8%)",
        Elements: "hsl(0, 0%, 100%)",
      },
    },
    screens: {
      xl: { max: "1200px" },
      lg: { max: "992px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
  },
  plugins: [],
};
