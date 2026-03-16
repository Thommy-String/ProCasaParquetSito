import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    // Tutto in un unico bundle JS (+ i lazy chunks delle route).
    // Evita micro-chunk da 0.3 KB che creano decine di richieste HTTP
    // e bloccano il rendering con un waterfall di rete.
    rollupOptions: {
      output: {
        // Un solo chunk "vendor" per tutte le librerie esterne
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
})
