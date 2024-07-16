import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginPromise from 'eslint-plugin-promise';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginTestingLibrary from 'eslint-plugin-testing-library';
import eslintPluginJestDom from 'eslint-plugin-jest-dom';
import eslintPluginVitest from 'eslint-plugin-vitest';

export default [
  {
    files: ['*.ts', '*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },
  {
    files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
    plugins: {
      import: eslintPluginImport,
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      'jsx-a11y': eslintPluginJsxA11y,
      promise: eslintPluginPromise,
      prettier: eslintPluginPrettier,
      'testing-library': eslintPluginTestingLibrary,
      'jest-dom': eslintPluginJestDom,
      vitest: eslintPluginVitest,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // Next.js 프로젝트에서는 필요 없음
      'prettier/prettier': 'error',
      'import/order': ['error', { 'newlines-between': 'always' }],
      'react/jsx-props-no-spreading': 'off',
      'jsx-a11y/anchor-is-valid': 'off', // Next.js 프로젝트에서는 Link 태그를 사용하므로
    },
  },
  {
    files: ['*.test.ts', '*.test.tsx', '*.spec.ts', '*.spec.tsx'],
    rules: {
      'testing-library/no-debugging-utils': 'warn',
      'testing-library/no-render-in-setup': 'off',
    },
  },
  {
    ignores: ['node_modules', 'dist', 'storybook-static'],
  },
];
