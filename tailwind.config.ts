import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
  safelist: [
    "bg-[url('/backgrounds/background.jpg')]",
    "bg-[url('/backgrounds/frio.jpeg')]",
    "bg-[url('/backgrounds/pouco-frio.jpg')]",
    "bg-[url('/backgrounds/quente.jpg')]",
    "bg-[url('/backgrounds/muito-quente.jpg')]",
  ],
} satisfies Config;
