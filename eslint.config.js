const { FlatCompat } = require('@eslint/eslintrc')
const js = require('@eslint/js')
const reactPlugin = require('eslint-plugin-react')
const typescriptPlugin = require('@typescript-eslint/eslint-plugin')
const typescriptParser = require('@typescript-eslint/parser')
const prettierPlugin = require('eslint-plugin-prettier')
const prettierConfig = require('eslint-config-prettier')
const storybookPlugin = require('eslint-plugin-storybook')
const nextPlugin = require('@next/eslint-plugin-next')

// Initialize FlatCompat with the recommendedConfig
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  resolvePluginsRelativeTo: __dirname,
})

module.exports = [
  js.configs.recommended,
  ...compat.extends('next/core-web-vitals'),
  ...compat.extends('eslint:recommended'),
  ...compat.extends('plugin:react/recommended'),
  ...compat.extends('plugin:@typescript-eslint/recommended'),
  ...compat.extends('prettier'),
  ...compat.extends('plugin:storybook/recommended'),
  {
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      prettier: prettierPlugin,
      react: reactPlugin,
      storybook: storybookPlugin,
      '@next/eslint-plugin-next': nextPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      'storybook/hierarchy-separator': 'off', // Storybook 규칙 비활성화
      '@next/next/no-duplicate-head': 'off', // Next.js 규칙 비활성화
      'storybook/prefer-pascal-case': 'off', // Storybook PascalCase 규칙 비활성화
      'storybook/story-exports': 'off', // Storybook story-exports 규칙 비활성화
      'storybook/no-uninstalled-addons': 'off', // Storybook no-uninstalled-addons 규칙 비활성화
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
      },
      globals: {
        browser: 'readonly',
        es2021: 'readonly',
        node: 'readonly',
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]
