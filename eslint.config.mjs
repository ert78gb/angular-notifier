import angular from 'angular-eslint';
import eslint from '@eslint/js';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tsEslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

const globalIgnores = ['.angular', '.idea', 'coverage', '**/dist', '**/node_modules', 'node_modules'];

export default tsEslint.config(
  { ignores: globalIgnores },
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tsEslint.configs.recommended,
      ...tsEslint.configs.recommendedTypeChecked,
      ...angular.configs.tsRecommended,
    ],
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    processor: angular.processInlineTemplates,
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@angular-eslint/prefer-standalone': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-redundant-type-constituents': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      'import/order': 'off',
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
      'sort-imports': 'off',
    },
  },
  {
    ignores: ['**/index.html'],
    files: ['**/*.html'],
    extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
    rules: {},
  },
  eslintPluginPrettierRecommended,
);
