import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#07111E",
          800: "#0C1B2E",
          700: "#132943",
          600: "#1E3A5F",
        },
        gold: {
          100: "#FDF8ED",
          200: "#F9EFD2",
          300: "#EED79D",
          400: "#DEBC69",
          500: "#C89D35",
          600: "#A87E23",
          700: "#7F5D17",
        },
        caribbean: {
          50: "#F0FDFD",
          100: "#CBFBFB",
          200: "#98F5F7",
          300: "#5CE5EB",
          400: "#1CC9D3",
          500: "#08ACB8",
          600: "#098997",
          700: "#0E6E7B",
        },
        sand: {
          50: "#FAF7F2",
          100: "#F4EFE6",
          200: "#E9DEC9",
          300: "#D4C5A9",
        }
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "serif"],
        sans: ["'Plus Jakarta Sans'", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        luxury: "0 20px 40px -15px rgba(7, 17, 30, 0.15)",
        gold: "0 10px 30px -10px rgba(200, 157, 53, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
