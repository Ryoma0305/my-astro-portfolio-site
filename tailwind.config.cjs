/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ['"Noto_Sans_JP"', "sans-serif"],
      accent: ['"Roboto"', "sans-serif"],
    },
    screens: {
      xs: "640px",
      sm: "768px",
      md: "896px",
      lg: "960px",
      xl: "1024px",
      "2xl": "1280px",
      "3xl": "1350px",
      "4xl": "1400px",
    },
    extend: {
      colors: {
        main: "#1d2426",
        accent: "#ddbc36",
        white: "#ffffff",
        black: "#141515",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
      keyframes: {
        sdb: {
          "0%": { transform: "rotate(-45deg) translate(0,0)", opacity: 0 },
          "50%": { opacity: 1 },
          "100%": {
            transform: "rotate(-45deg) translate(-20px, 20px)",
            opacity: 0,
          },
        },
      },
      animation: {
        sdb: "sdb 1.5s infinite",
      },
    },
  },
  plugins: [],
};
