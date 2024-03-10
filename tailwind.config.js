/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        "lingth-brown": "#f3e5d8",
      },
    },
    fontFamily: {
      primary: "outfit",
      title: "young-serif",
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
