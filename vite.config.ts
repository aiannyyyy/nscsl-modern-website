import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      'Content-Security-Policy': "frame-src 'self' https://www.google.com https://maps.google.com https://maps.googleapis.com;",
    },
  },
})