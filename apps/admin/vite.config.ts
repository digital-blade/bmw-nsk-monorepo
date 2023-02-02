import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000
  },
  optimizeDeps: {
    include: ['contract']
  },
  build: {
    commonjsOptions: {
      include: [/contract/, /node_modules/]
    }
  },
  plugins: [
    react(),
    tsconfigPaths({
      root: '.'
    })
  ]
})
