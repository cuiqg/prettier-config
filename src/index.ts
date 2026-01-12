/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {@type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions}}
 */
export default {
  useTabs: false,
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  singleAttributePerLine: true,
  plugins: [
    'prettier-plugin-tailwindcss'
  ]
}
