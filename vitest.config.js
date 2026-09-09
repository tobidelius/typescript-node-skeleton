import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    setupFiles: './test/setup.ts',
    globals: true,
    exclude: [...configDefaults.exclude, 'dist/**'],
  },
})
