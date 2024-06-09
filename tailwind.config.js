/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        "main-yellow": {
          50: "#fefde8",
          100: "#fffdc2",
          200: "#fff887",
          300: "#ffec43",
          400: "#ffda0a",
          500: "#efc203",
          600: "#ce9600",
          700: "#a46b04",
          800: "#88530b",
          900: "#734410",
          950: "#432305",
        },
        "secondary-yellow": {
          50: "#fefde8",
          100: "#fffec2",
          200: "#fff987",
          300: "#ffee43",
          400: "#ffdf1f",
          500: "#efc403",
          600: "#ce9800",
          700: "#a46c04",
          800: "#88540b",
          900: "#734510",
          950: "#432405",
        },
      },
    },
  },
  plugins: [],
};
