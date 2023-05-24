/* eslint-env node */

import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { join } from 'node:path'
import { renderer } from 'unplugin-auto-expose'
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
  resolve: {
    alias: {
      '/@/': join(PACKAGE_ROOT, 'src') + '/'
    }
  },
  base: '',
  server: {
    fs: {
      strict: true
    }
  },
  build: {
    sourcemap: true,
    target: `chrome${chrome}`,
    outDir: 'dist',
    assetsDir: '.',
    rollupOptions: {
      input: join(PACKAGE_ROOT, 'index.html')
    },
    emptyOutDir: true,
    reportCompressedSize: false
  },
  test: {
    globals: true,
    environment: 'jsdom'
  },
  plugins: [
    svelte({
      preprocess: vitePreprocess()
    }),
    renderer.vite({
      preloadEntry: join(PACKAGE_ROOT, '../preload/src/index.ts')
    }),
    injectAppVersion()
  ]
})

export default config
