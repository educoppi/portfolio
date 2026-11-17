import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base relativa: funciona no GitHub Pages (educoppi.github.io/portfolio) e em qualquer subpasta
export default defineConfig({
  plugins: [react()],
  base: './',
})
