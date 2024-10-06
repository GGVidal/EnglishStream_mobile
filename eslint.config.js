const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js'); // Import ESLint's JS module

// Initialize FlatCompat with recommendedConfig and allConfig
const compat = new FlatCompat({
  recommendedConfig: js.configs.recommended, // Use recommended config
  allConfig: js.configs.all, // Optional, if using "eslint:all"
  baseDirectory: __dirname, // Optional; base directory for resolving plugins
});

module.exports = [
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      react: require('eslint-plugin-react'),
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
    },
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'no-console': ['error', { allow: ['tron', 'disableYellowBox'] }],
    },
  },
  ...compat.extends(
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime',
  ),
];
