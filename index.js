/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  semi: false,
  singleQuote: true,
  bracketSpacing: true,
  bracketSameLine: true,
  trailingComma: 'none',
  arrowParens: 'avoid',
  endOfLine: 'lf',
  useTabs: false,
  tabWidth: 2,
  singleAttributePerLine: true,
  vueIndentScriptAndStyle: false,
  editorconfig: true,
  plugins: [],
  overrides: [],
}

export default config
