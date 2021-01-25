const { nuxifyStorybook } = require('../.nuxt-storybook/storybook/main.js')

module.exports = nuxifyStorybook({
  webpackFinal (config, options) {

    // extend config here

    return config
  },
  stories: [
    // Add your stories here
  ],
  addons: [
    'storybook-design-token',
    '@storybook/addon-a11y',
    'storybook-dark-mode',
  ],
})
