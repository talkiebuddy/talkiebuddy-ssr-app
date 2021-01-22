export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Talkiebuddy NuxtJs',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Talkiebuddy.com is a web app to practice English pronunciation and conversation using Speech Recognition and Speech Synthesis technology'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  target: 'server',
  router: {
    base: '/talkiebuddy-ssr-app'
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)

  plugins: [
    { src: '~/plugins/helpers' },
    { src: '~/plugins' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [{
    path: '~/components/',
    extensions: ['vue']
  }],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: ['~/assets/scss/resource.scss']
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend (config, { isDev, isClient }) {
      const svgRule = config.module.rules.find(rule => typeof rule.test.test === 'function' && rule.test.test('.svg'))
      svgRule.test = new RegExp(svgRule.test.source.replace('svg|', ''))

      // Add a new rule for svg files only
      config.module.rules.push({
        test: /\.svg$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true
            }
          }
        ]
      })
    }
  }
}
