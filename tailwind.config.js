module.exports = {
  theme: {
    extend: {
      margin: {
        "-57": "-202px"
      },
      spacing: {
        line: "3px",
        "72": "24rem",
        "14": "3.5rem"
      },
      zIndex: {
        "-10": "-10"
      }
    },
    customForms: theme => ({
      default: {
        checkbox: {
          icon: `<svg viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 9L10 12L20 2" stroke="#419D78" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M19 10V17C19 18.1046 18.1046 19 17 19H3C1.89543 19 1 18.1046 1 17V3C1 1.89543 1.89543 1 3 1H14" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          `
        }
      }
    }),
    fontFamily: {
      sans: ["Ropa Sans", "sans-serif"],
      display: ["Ropa Sans", "sans-serif"],
      body: ["Ropa Sans", "sans-serif"]
    },
    colors: {
      red: "#C90000",
      transparent: "transparent",
      green: "#419D78",
      white: "#fff",
      black: "#000",
      gray: {
        50: "#F8F8F8",
        80: "#EAEAEA",
        100: "#E5E5E5",
        300: "#909090",
        900: "#242424",
        transparent: "rgba(0, 0, 0, 0.42)"
      },
      blue: {
        dark: "#1356A4",
        light: "#4A90E2"
      }
    }
  },
  variants: {
    display: ["responsive", "last"]
  },
  plugins: [require("@tailwindcss/custom-forms")]
};
