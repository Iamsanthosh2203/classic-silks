/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    //change md screen size
    screens: {
      md: "1024px",
    },
    extend: {
      //add fonts
      fontFamily: {
        primary: "Abhaya Libre",
      },
    },
  },
  plugins: [],
};
