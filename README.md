# @cuiqg/prettier-config

[![npm](https://img.shields.io/npm/v/@cuiqg/prettier-config?color=%23ff4777&label=)](https://www.npmjs.com/package/@cuiqg/prettier-config)

## Usage

Usage is based on [Sharing configurations](https://prettier.io/docs/en/configuration.html#sharing-configurations) from the Prettier docs.

1. Remove existing `.prettierrc` file, if present.

2. Install the config:
```bash
npm i -D @cuiqg/prettier-config
```
3. Add the following to `package.json`:
```diff
{
+  "prettier": "@cuiqg/prettier-config"
}
```
