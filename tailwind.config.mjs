/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // CYCLOS Brand Colors
        lime: {
          DEFAULT: "#CEEE08",
          50: "#F9FDE6",
          100: "#F5FCD0",
          200: "#EEFA9E",
          300: "#E5F76B",
          400: "#DAF339",
          500: "#CEEE08",
          600: "#A5BF06",
          700: "#7C8F05",
          800: "#536003",
          900: "#2A3002",
          950: "#151801",
        },
        blue: {
          DEFAULT: "#3E9CFF",
          50: "#EBF5FF",
          100: "#D6EBFF",
          200: "#ADD7FF",
          300: "#85C3FF",
          400: "#5CAFFF",
          500: "#3E9CFF",
          600: "#0A7AE6",
          700: "#075CAD",
          800: "#053D73",
          900: "#021F3A",
          950: "#010F1D",
        },
        // Keep gray for neutral UI elements
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
          950: "#030712",
        },
      },
      fontFamily: {
        sans: ["Gotham", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
