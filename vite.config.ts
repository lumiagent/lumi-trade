import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      // add polyfills for node core modules and globals in dev & build
      protocolImports: true
    })
  ],
  resolve: {
    alias: {
      // ensure crypto, streams, assert resolve to browser shims
      crypto: 'crypto-browserify',
      stream: 'stream-browserify',
      assert: 'assert'
    }
  },
  define: {
    // make "process.env" safe in browser bundles
    'process.env': {},
    // some libs expect "global"
    global: 'globalThis'
  },
  optimizeDeps: {
    include: [
      'buffer',
      'process',
      'crypto-browserify',
      'stream-browserify',
      'assert'
    ],
    esbuildOptions: {
      define: {
        global: 'globalThis'
      }
    }
  },
  build: {
    commonjsOptions: {
      // needed when CJS/ESM are mixed (several crypto/solana deps do this)
      transformMixedEsModules: true
    }
  }
})
