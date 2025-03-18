import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      primary: '#5D5CDE',
      accent: '#21CDB9',
      darkBg: '#0D1520',
      darkCard: '#151F2E',
      darkBorder: '#263040',
    }
  },
  plugins: [react(), tailwindcss()],
})
