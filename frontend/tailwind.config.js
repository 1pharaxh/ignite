module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // THEME COLORS
        // "primary-color": "#0F6F7B", // Can be changed
        // "primary-light": "#17bec3", // Hover Color
        // "primary-dark": "#042f2e", // Can be changed
        // "primary-lighter": "#8BDEE1", // Can be changed
        "light-color": "#f1f5f9", // DO NOT CHANGE
        "dark-color": "#072033", //  DO NOT CHANGE
        "warning-color": "#FEE21E", // DO NOT CHANGE

        "primary-color": "#58b368", // Can be changed
        "primary-light": "#dad873", // Hover Color
        "primary-dark": "#309975", // Can be changed
        "primary-lighter": "#efeeb4", // Can be changed
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
 * \src\components\PageBanner.jsx,
 * \src\components\HomeComponents\HomeTimeline.jsx,
 * \src\pages\Company.jsx,
 * \src\pages\Companies.jsx
 *
 */
