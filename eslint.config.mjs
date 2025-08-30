import { defineConfig } from "eslint/config";
import eslint from '@eslint/js';
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tsEslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

const globalIgnores = [
  '.idea',
  '**/dist',
  '**/node_modules',
  'node_modules',
];

export default defineConfig([
  { ignores: globalIgnores },
  ...tsEslint.config(
    { ignores: ['**/*.js', '**/*.mjs'] },
    eslint.configs.recommended,
    // typescript-eslint shared configs
    tsEslint.configs.recommended,
    tsEslint.configs.recommendedTypeChecked,
    {
      languageOptions: {
        parserOptions: {
          projectService: true,
          tsconfigRootDir: import.meta.dirname,
        },
      },
      plugins: {
        "simple-import-sort": simpleImportSort,
      },
      rules: {
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/no-redundant-type-constituents": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        "@typescript-eslint/unbound-method": "off",
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "import/order": "off",
        "simple-import-sort/exports": "error",
        "simple-import-sort/imports": "error",
        "sort-imports": "off"
      }
    },
    eslintPluginPrettierRecommended,
  ),
]);
