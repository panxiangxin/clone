module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    mocha: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'no-prototype-builtins': 0,
    'prettier/prettier': 'error',
  },
};
