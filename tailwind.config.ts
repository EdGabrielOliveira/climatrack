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
      screens: {
        xs: "370px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
  safelist: [
    "bg-[url('/backgrounds/background.webp')]",
    "bg-[url('/backgrounds/frio.webp')]",
    "bg-[url('/backgrounds/pouco-frio.webp')]",
    "bg-[url('/backgrounds/quente.webp')]",
    "bg-[url('/backgrounds/muito-quente.webp')]",
  ],
} satisfies Config;
