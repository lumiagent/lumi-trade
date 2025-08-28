import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import rollupNodePolyFill from 'rollup-plugin-polyfill-node'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      process: 'rollup-plugin-polyfill-node/polyfills/process-es6',
      buffer: 'rollup-plugin-polyfill-node/polyfills/buffer.js',
    },
  },
  optimizeDeps: {
    include: ['buffer', 'process'],
  },
  build: {
    rollupOptions: {
      plugins: [rollupNodePolyFill()],
    },
    commonjsOptions: { transformMixedEsModules: true },
  },
})
