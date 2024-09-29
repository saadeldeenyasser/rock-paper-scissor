/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        darkBlue: "rgb(30, 30, 57)",
        white: "#fff",
        yellow: "hsl(40, 84%, 53%)",
        blue: "hsl(230, 89%, 62%)",
        red: "hsl(349, 71%, 52%)",
        neutral: {
          DarkText: "hsl(229, 25%, 31%)",
          ScoreText: "hsl(229, 64%, 46%)",
          HeaderOutline: "hsl(217, 16%, 45%)",
        },
      },
      grayscale: {
        0.5: "50%",
      },
      screens: {
        xs: "320px",
        sm: "375px",
      },
    },
    colors: {
      /* backRadialGradient: 'hsl(214, 47%, 23%) to hsl(237, 49%, 15%)',
      primary:{
        ScissorsGradient: 'hsl(39, 89%, 49%) to hsl(40, 84%, 53%)',
        PaperGradient: 'hsl(230, 89%, 62%) to hsl(230, 89%, 65%)',
        RockGradient: 'hsl(349, 71%, 52%) to hsl(349, 70%, 56%)',
      }, */
    },
  },
  plugins: [],
};
