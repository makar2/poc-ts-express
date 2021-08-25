module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: [
    '@typescript-eslint',
    'import',
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 0,
    'import/extensions': 0,
    'no-console': [1, { allow: ['error', 'info', 'warning'] }],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
