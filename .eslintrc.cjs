/** @ts-check @type import('eslint-config-standard-typescript-prettier/types').TsEslintConfig */

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['standard-with-typescript'],
  plugins: ['svelte3', '@typescript-eslint', 'prettier'],
  ignorePatterns: ['*.cjs'],
  overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
  settings: {
    'svelte3/typescript': () => require('typescript'),
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2019,
    project: './tsconfig.json',
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  rules: {
    '@typescript-eslint/strict-boolean-expressions': 'off'
  }
};
