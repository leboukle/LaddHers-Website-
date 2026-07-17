/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F7F5F0",
        limestone: "#E8E3D9",
        travertine: "#DCD4C4",
        charcoal: "#242320",
        ink: "#141311",
        sage: "#9CAA92",
        fuchsia: {
          DEFAULT: "#C2185B",
          light: "#D6487E",
          dark: "#8C1244",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Helvetica Neue", "Arial", "sans-serif"],
      },
      maxWidth: {
        editorial: "1280px",
        narrow: "760px",
      },
      letterSpacing: {
        wide2: "0.08em",
        wide3: "0.18em",
        wide4: "0.28em",
      },
      transitionDuration: {
        400: "400ms",
        600: "600ms",
      },
    },
  },
  plugins: [],
};
