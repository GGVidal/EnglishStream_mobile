module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
  rules: {
    'no-unused-vars': 'error', // Adiciona a regra para variáveis não utilizadas
  },
};
