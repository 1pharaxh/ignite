module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // THEME COLORS
        "primary-color": "#0F6F7B", // navbar select color
        "primary-light": "#17bec3", // navbar hover color
        "primary-lighter": "#8BDEE1",
        "light-color": "#f1f5f9", // white
        "dark-color": "#072033", // black
        "primary-dark": "#042f2e",
        "warning-color": "#FEE21E",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
/**
 *
 *  WHEN CHANGING COLORS MAKE SURE TO CHANGE
 * \src\components\PageBanner.jsx
 * AND
 * \src\components\HomeComponents\HomeTimeline.jsx
 *
 */
