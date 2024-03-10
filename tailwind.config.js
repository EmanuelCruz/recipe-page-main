/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.html"],
  theme: {
    extend: {},
    fontFamily: {
      primary: "outfit",
      title: "young-serif",
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
