import { join } from 'node:path'
import { preload } from 'unplugin-auto-expose'
import { defineConfig } from 'vite'
import { chrome } from '../../.electron-vendors.cache.json'
import { injectAppVersion } from '../../version/inject-app-version-plugin.mjs'

const PACKAGE_ROOT = __dirname
const PROJECT_ROOT = join(PACKAGE_ROOT, '../..')

/**
 * @see https://vitejs.dev/config/
 */
const config = defineConfig({
  mode: process.env.MODE,
  root: PACKAGE_ROOT,
  envDir: PROJECT_ROOT,
  build: {
    ssr: true,
    sourcemap: 'inline',
    target: `chrome${chrome}`,
    outDir: 'dist',
    assetsDir: '.',
    minify: process.env.MODE !== 'development',
    lib: {
      entry: 'src/index.ts',
      formats: ['cjs']
    },
    rollupOptions: {
      output: {
        entryFileNames: '[name].cjs'
      }
    },
    emptyOutDir: true,
    reportCompressedSize: false
  },
  plugins: [preload.vite(), injectAppVersion()]
})

export default config
