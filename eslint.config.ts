import * as js from '@eslint/js';
import * as globals from 'globals';
import tseslint from 'typescript-eslint';
import * as pluginReact from 'eslint-plugin-react';
import * as prettierPlugin from 'eslint-plugin-prettier';
import * as prettierConfig from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: {
      globals: globals.browser,
    },
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  // prettier plugin
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },

  // must be LAST → disable conflicting rules
  prettierConfig,
]);
