import type { Config } from "tailwindcss";
import daisyui from 'daisyui'

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [ "light", 'dark'], // Укажите темы, которые хотите использовать
  },
  theme: {
    extend: {
		backgroundImage: {
			mii: 'url(/menuImages/mainIntro.webp)'
		},
		screens: {
			'custom-range': { min: '420px', max: '639px' }, // Диапазон от 420px до 640px
		  },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [daisyui],
} satisfies Config;

