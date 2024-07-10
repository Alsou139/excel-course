const googleConfig = require('eslint-config-google');

module.exports = [
  googleConfig,
  {
    rules: {
      'max-len': [
        'error',
        {
          ignoreComments: true,
        },
      ],
    },
  },
];
