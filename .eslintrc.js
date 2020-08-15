module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'wyze',
  ],
  rules: {
    // "wyze/sort-imports": 2,
    // "react/jsx-sort-props": [2, {
    //   "ignoreCase": false,
    //   "callbacksLast": false,
    //   "shorthandFirst": false
    // }],
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],

  },
};
