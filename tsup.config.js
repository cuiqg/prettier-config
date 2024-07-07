import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.js'],
  format: ['cjs', 'esm'],
  shims: true,
  clean: true,
  target: 'esnext'
})
