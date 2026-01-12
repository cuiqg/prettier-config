// @ts-check
import { fileURLToPath } from 'node:url'

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions}
 */
export default {
  useTabs: false,
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  singleAttributePerLine: true,
  plugins: [fileURLToPath(import.meta.resolve('@prettier/plugin-oxc')), 'prettier-plugin-tailwindcss']
}
