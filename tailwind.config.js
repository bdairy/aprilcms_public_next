/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: "1rem",

      // default breakpoints but with 40px removed
      screens: {
        sm: "600px",
        md: "728px",
        lg: "970px",
        xl: "1170px",
        "2xl": "1170px",
      },
    },
    extend: {
      colors: {
        primary: {
          50: "#f7f1f1",
          100: "#ebdcdd",
          200: "#dec5c6",
          300: "#d0adaf",
          400: "#c69c9e",
          500: "#bc8a8d",
          600: "#b68285",
          700: "#ad777a",
          800: "#a56d70",
          900: "#975a5d",
        },

        greydark: {
          50: "#f0f0f0",
          100: "#d9d9d9",
          200: "#c0c0c0",
          300: "#a7a7a7",
          400: "#949494",
          500: "#818181",
          600: "#797979",
          700: "#6e6e6e",
          800: "#646464",
          900: "#515151",
        },
        beige: {
          50: "#fdfdfd",
          100: "#fbfafa",
          200: "#f8f6f6",
          300: "#f5f2f2",
          400: "#f2f0f0",
          500: "#f0eded",
          600: "#eeebeb",
          700: "#ece8e8",
          800: "#e9e5e5",
          900: "#e5e0e0",
        },
      },
      transitionProperty: {
        height: "height",
        "max-height": "max-height",
        spacing: "margin, padding",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
