/** @type {import('tailwindcss').Config} */
export default {
  content: [],
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
        "main-black": {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d3d3d3",
          300: "#d1d1d1",
          400: "#6d6d6d",
          500: "#5d5d5d",
          600: "#4f4f4f",
          700: "#454545",
          800: "#3d3d3d",
          900: "#222222",
          950: "#191919",
        },
      },
      screens: {
        small: "350px",
      },
    },
  },
  plugins: [],
};
