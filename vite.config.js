import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Para GitHub Pages, defina base: '/nome-do-repositorio/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
