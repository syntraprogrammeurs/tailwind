/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"], // This now points to HTML and JS files at the project root.
  theme: {
    extend: {},
  },
  variants:{
    extend:{
      backgroundColor:["active"],
      fontSize:['hover'],
    }
  },
  plugins: [],
}

