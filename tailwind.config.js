/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    screens:{
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px', 
    },  
    extend: {
      colors: {
        'dot':'#161918',
        'gg':'#03BE5E',
        'lightgg':'#00A651',
        'deepgreen':'#00160B',
        'grad':'#222624',
        'tgrade':'#161918'
      },
      fontFamily:{
        'sora':'sora',
    },
    },
  },
  plugins: [],
}

