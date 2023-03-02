module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "off-white": "#FEFEFE",
        "off-black": "#072033",
        "dark-teal": "#0F6F7B",
        "light-teal": "#17bec3",
        "super-light-teal": "#8BDEE1",
        "base-yellow": "#FEE21E",
        "danger-red": "#F56A6A",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
