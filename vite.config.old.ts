import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import rollupNodePolyFill from 'rollup-plugin-polyfill-node';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      process: 'rollup-plugin-polyfill-node/polyfills/process-es6.js',
      buffer: 'rollup-plugin-polyfill-node/polyfills/buffer-es6.js',
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
});
