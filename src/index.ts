import * as pluginOxc from '@prettier/plugin-oxc'
import type { Config } from 'prettier'
import * as pluginTailwindcss from 'prettier-plugin-tailwindcss'
/**
 * @see https://prettier.io/docs/en/configuration.html
 */
const config: Config & pluginTailwindcss.PluginOptions = {
  experimentalTernaries: false,
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  bracketSameLine: true,
  arrowParens: 'avoid',
  requirePragma: false,
  insertPragma: false,
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'css',
  vueIndentScriptAndStyle: false,
  endOfLine: 'lf',
  embeddedLanguageFormatting: 'auto',
  singleAttributePerLine: true,
  plugins: [pluginOxc, pluginTailwindcss],
}

export default config
