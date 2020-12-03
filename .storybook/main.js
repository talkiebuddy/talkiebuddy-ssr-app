const { nuxifyStorybook } = require('../.nuxt-storybook/storybook/main.js')
const path = require('path');

module.exports = nuxifyStorybook({
  webpackFinal(config, options) {
    return config
  },
  stories: [
    // Add your stories here
  ],
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-actions',
    '@storybook/addon-controls',
    '@storybook/addon-docs',
    '@storybook/addon-links',
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          include: [path.resolve(__dirname, './')]
        },
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false }
        }
      }
    },
    '@storybook/addon-a11y'
  ]
})
