import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  fixedExtension: true,
  dts: true,
  shims: true,
  clean: true,
  exports: true,
  publint: true,
   unused: {
    level: 'error',
    ignore: [
      'typescript'
    ],
  },
})
