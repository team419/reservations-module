module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": "airbnb",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    'no-console': 'warn',
    'comma-dangle': 'off',
    'no-plusplus': 'off',
    'func-names': 'off',
    'no-unused-vars': [
      'warn',
      {
        'vars': 'local',
        'args': 'none'
      }
    ],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/forbid-prop-types": 0,
    "object-curly-newline": 0
  }
};
