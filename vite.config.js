import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    // Usamos ruta relativa para evitar problemas con el nombre del repo
    base: './',
    build: {
        outDir: 'docs',
    },
})
