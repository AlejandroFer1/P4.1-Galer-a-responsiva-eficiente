import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    // Reemplaza 'nombre-de-tu-repo' con el nombre exacto de tu repositorio en GitHub
    // Por ejemplo, si tu repo es https://github.com/usuario/mi-proyecto, usa '/mi-proyecto/'
    base: '/Fernández_Alejandro_p4.1/',
    build: {
        outDir: 'docs',
    },
})
