/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#5051FB",

          secondary: "#C879FF",

          accent: "#EFEFEF",

          neutral: "#000000",

          "base-100": "#FFFFFF",

          info: "#aaaaaa",

          success: "#7BFC2C",

          warning: "#FFFF1F",

          error: "#ff0000",
        },
        // dark: {
        //   primary: "#5051FB",

        //   secondary: "#C879FF",

        //   accent: "#EFEFEF",

        //   neutral: "#ffffff",

        //   "base-100": "#000000",

        //   info: "#aaaaaa",

        //   success: "#7BFC2C",

        //   warning: "#FFFF1F",

        //   error: "#ff0000",
        // },
      },
    ],
  },
  plugins: [require("daisyui")],
};
