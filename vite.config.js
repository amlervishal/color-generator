import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/color-generator/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})