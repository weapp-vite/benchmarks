import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: [{
      // Keep source types in the editor while exercising emitted modules at runtime.
      find: /^\.\.\/src\//,
      replacement: fileURLToPath(new URL('./dist/', import.meta.url)),
    }],
  },
  test: {
    include: ['test/**/*.test.ts'],
  },
})
