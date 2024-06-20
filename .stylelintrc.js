const config = require('@garron/lint').stylelint;

module.exports = {
  ...config,
  rules: {
    'selector-id-pattern': null,
  },
};
