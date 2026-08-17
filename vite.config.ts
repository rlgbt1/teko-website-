import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // Served from https://rlgbt1.github.io/teko-website-/ until a custom domain is attached.
  // Only applied at build time so `npm run dev` still serves from the root locally.
  base: command === 'build' ? '/teko-website-/' : '/',
  plugins: [react(), tailwindcss()],
}))
