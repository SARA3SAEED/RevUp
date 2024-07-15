/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // daisyui: {
  //   themes: [{
  //     mytheme: {
      
  //     "primary": "",
  //     "secondary": "",
  //     "accent": "",
  //     "neutral": "",
  //     "base-100": "",
  //     "info": "",
  //     "success": "",
  //     "warning": "",
  //     "error": "",
  //   },
  //   },
  // ],
  // },
  plugins: [require('daisyui'),],
}

