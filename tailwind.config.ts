import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f172a', // slate-900
          light: '#1e293b', // slate-800
        },
        accent: {
          DEFAULT: '#3b82f6', // blue-500
          light: '#60a5fa', // blue-400
        },
        dark: {
          DEFAULT: '#0a0e1a',
          light: '#1a1f2e',
        },
      },
    },
  },
  plugins: [],
}
export default config

