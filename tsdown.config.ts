import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  fixedExtension: true,
  dts: true,
  shims: true,
  clean: true
})
