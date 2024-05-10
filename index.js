/** @type {import('prettier').Config} */
module.exports = {
  semi: false,
  singleQuote: true,
  bracketSpacing: true,
  bracketSameLine: true,
  trailingComma: "es5",
  arrowParens: "avoid",
  endOfLine: "lf",
  tabWidth: 2,
  singleAttributePerLine: true,
  vueIndentScriptAndStyle: false,
  plugins: [
    "prettier-plugin-packagejson",
    "prettier-plugin-tailwindcss",
    "@shufo/prettier-plugin-blade",
    "@trivago/prettier-plugin-sort-imports",
  ],
  overrides: [
    {
      files: "*.blade.php",
      options: {
        parser: "blade",
      },
    },
  ],
};
