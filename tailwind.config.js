module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Eudoxus Sans", "ui-sans-serif", "system-ui"],
        serif: ["Eudoxus Sans", "ui-serif", "Georgia"],
        mono: ["Eudoxus Sans", "ui-monospace", "SFMono-Regular"],
      },
      colors: {
        "sc-gray": "#E0E0E0",
      },
    },
  },
  plugins: [],
};
