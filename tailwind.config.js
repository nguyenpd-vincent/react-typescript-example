/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        custom: "0 -1px 0 rgba(0, 0, 0, 0.25)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      gridTemplateColumns: {
        contactTrash: "46px 56px 56px 588px",
        eventTrash: "46px 96px 418px 186px",
        correspondant: "353px 136px 236px 46px",
      },
    },

    fontFamily: {
      global: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      timeNewRoman: '"Times New Roman"',
      roboto: '"Roboto"',
    },
  },
  plugins: [require("tailwindcss-animate")],
};
