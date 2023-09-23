module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'prettier/prettier': 0,
    'semi': [ 'never' ],
    'eol-last': ['error', 'never'],
    "no-multiple-empty-lines": [2, {"max": 99999, "maxEOF": 0}]
  },
};
