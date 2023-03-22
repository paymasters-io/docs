/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    corePlugins: { preflight: false },
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "../docs/**/*.mdx"
  ],
  theme: {
    extend: {
      colors: {
        backgroundTheme: "#11142b",
        jsClientDark: "rgba(125, 12, 193, 0.3)",
        blurColor: "rgba(125, 12, 193, 0.5)",
        "paymasters-purple": {
          DEFAULT: "#7d0cc1",
          50: "#fbf3ff",
          100: "#f5e4ff",
          200: "#edceff",
          300: "#dfa8ff",
          400: "#cb71ff",
          500: "#b83cff",
          600: "#a616ff",
          700: "#9107e9",
          800: "#7d0cc1",
          900: "#650b98",
        },
        "milano-red": {
          DEFAULT: "#c10c0c",
          50: "#fff1f1",
          100: "#ffdfdf",
          200: "#ffc5c5",
          300: "#ff9c9c",
          400: "#ff6464",
          500: "#ff3333",
          600: "#ee1414",
          700: "#c10c0c",
          800: "#a50f0f",
          900: "#891313",
        },
        "secondary-purple": {
          DEFAULT: "#6900ad",
          50: "#f6f0ff",
          100: "#f0e4ff",
          200: "#e2ccff",
          300: "#cea4ff",
          400: "#b970ff",
          500: "#a837ff",
          600: "#a50fff",
          700: "#9b00ff",
          800: "#8200da",
          900: "#6900ad",
        },
        "paymasters-dark": {
          DEFAULT: "#11142B",
          50: "#F3F4FA",
          100: "#E1E3F3",
          200: "#BCC1E5",
          300: "#989FD6",
          400: "#737DC8",
          500: "#4F5BB9",
          600: "#3C4799",
          700: "#2E3674",
          800: "#1F2550",
          900: "#11142B",
        },
      },
    },
  },
  plugins: ["docusaurus-tailwindcss"]
};
