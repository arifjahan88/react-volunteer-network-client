/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ffcdc9",

          secondary: "#fc934e",

          accent: "#74ba34",

          neutral: "#2B313B",

          "base-100": "#FFFFFF",

          info: "#6D82DF",

          success: "#1DB4A5",

          warning: "#CE7D03",

          error: "#FB6A74",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
