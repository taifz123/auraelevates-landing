import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // The isolated WebGL experience is a desktop-only dynamic chunk and is not
    // part of the mobile or reduced-motion payload.
    chunkSizeWarningLimit: 900,
  },
})
