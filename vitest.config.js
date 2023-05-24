import { defineConfig } from 'vite'

/**
 * Configuration for the global end-to-end testing,
 * placed in the project's root 'tests' folder.
 * @see https://vitest.dev/config/
 */
const config = defineConfig( {
  test: {
    /**
     * By default, vitest searches for the test files in all packages.
     * For e2e tests, have vitest search only in the project root 'tests' folder.
     */
    include: ['./tests/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    /**
     * The default timeout of 5000ms is sometimes not enough for playwright.
     */
    testTimeout: 30_000,
    hookTimeout: 30_000,
    environment: 'jsdom'
  }
} )

export default config
