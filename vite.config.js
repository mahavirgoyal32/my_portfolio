// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: 'https://github.com/mahavirgoyal32/my_portfolio',
  plugins: [react()],
})
