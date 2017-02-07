module.exports = {
  root: true,

  parser: 'babel-eslint',

  parserOptions: {
    sourceType: 'module',
  },

  env: {
    browser: true,
    node: true,
  },

  extends: 'airbnb-base',

  plugins: [
    'html',
  ],

  settings: {
    'import/resolver': {
      webpack: {
        config: 'lib/config/webpack.base.config.js',
      },
    },
  },

  rules: {
    'import/extensions': ['error', 'always', {
        js: 'never',
        vue: 'never',
      },
    ],
    // turn this off so we can use el.style.whatever
    'no-param-reassign': 'off',
  },
};
