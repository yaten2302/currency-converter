/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.{html, js}"],
  theme: {
    extend: {},
    fontFamily: {
      bodyFont: "Ubuntu Mono",
    },
    colors: {
      backgroundColor: "#221f2f",
      textColor: "#fff",
      converterBackground: "rgba(0,0,0,0.44)",
      borderHoverColor: "#675afe",
      buttonBackground: "#20232c",
      buttonBackgroundHover: "#675afe",
      redColor: "#ff0000",
    },
    height: {
      containerHeight: "100vh",
      converterHeight: "500px",
    },
    width: {
      converterWidth: "380px",
      buttonWidth: "100px",
    },
    borderWidth: {
      inputBorder: "1px",
    },
  },
  plugins: [],
};
