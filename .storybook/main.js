const { nuxifyStorybook } = require('../.nuxt-storybook/storybook/main.js')
// const DependenciesPlugin = require('storybook-dep-webpack-plugin');

module.exports = nuxifyStorybook({
  webpackFinal(config, options) {

    // extend config here
    // plugins: [
    //   ...config.plugins,
    //   new DependenciesPlugin({
    //     filter: (resource) => {
    //       return /\.(stories|story)\.[tj]sx?$/.test(resource);
    //     }
    //   })
    // ]

    return config
  },
  // presets: ['storybook-addon-deps/preset'],
  stories: [
    // Add your stories here
    '../components/**/*.stories.mdx'
  ],
  addons: [
    'storybook-design-token',
    '@storybook/addon-a11y',
    'storybook-dark-mode',
    'storybook-addon-deps'
  ],
})
