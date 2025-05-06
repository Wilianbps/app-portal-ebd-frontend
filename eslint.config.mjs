import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import pluginPrettier from 'eslint-plugin-prettier'
import configPrettier from 'eslint-config-prettier'

export default [
  // Configuração base para todos os arquivos
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node, // Opcional, se você usa Node.js
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true, // Garante suporte a JSX
        },
      },
    },
    plugins: {
      react: pluginReact,
      prettier: pluginPrettier,
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      ...configPrettier.rules,
      'react/react-in-jsx-scope': 'off', // Desativa a exigência de importar React
      'react/prop-types': 'off', // Desativa PropTypes (opcional, se você usa TypeScript)
      'prettier/prettier': ['error', { singleQuote: true, semi: false }],
    },
  },
  // Configurações específicas para TypeScript
  ...tseslint.configs.recommended,
]
