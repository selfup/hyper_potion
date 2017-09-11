module.exports = {
  'extends': 'airbnb-base',
  'plugins': [
    'import',
  ],
  "env": {
    "browser": true,
    "es6": true,
  },
  'rules': {
    'linebreak-style': 'off',
    'no-unused-vars': [
      2,
      { 'varsIgnorePattern': 'h' },
    ]
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
  },
};
