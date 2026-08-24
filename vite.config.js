import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so built assets resolve correctly under any host path
// (root domain, Vercel, or subpath preview).
export default defineConfig({
  plugins: [react()],
  base: './',
})
