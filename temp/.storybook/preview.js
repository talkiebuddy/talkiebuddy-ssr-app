export * from '~~/.nuxt-storybook/storybook/preview.js'

const scssReq = require.context(
  '!!raw-loader!../assets/scss/',
  true,
  /.\.scss$/
)

const scssTokenFiles = scssReq
  .keys()
  .map((filename) => ({ filename, content: scssReq(filename).default }))

const svgIconsReq = require.context(
  '!!raw-loader!../assets/images/icons',
  true,
  /.\.svg$/
)

const svgIconTokenFiles = svgIconsReq
  .keys()
  .map((filename) => ({ filename, content: svgIconsReq(filename).default }))

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'talkiebuddy',
    values: [
      {
        name: 'talkiebuddy',
        value: '#FFFCF2',
      },
      {
        name: 'white',
        value: '#FFFFFF',
      },
      {
        name: 'dark',
        value: '#1e2225'
      }
    ],
  },
  designToken: {
    files: {
      scss: scssTokenFiles,
      svgIcons: svgIconTokenFiles
    },
    options: {
      hideMatchingHardCodedValues: false
    }
  },
  options: {
    panelPosition: 'right'
  }
}

// export const globalTypes = {
//   theme: {
//     name: 'Theme',
//     description: 'Global theme for components',
//     defaultValue: 'light',
//     toolbar: {
//       icon: 'circlehollow',
//       items: ['light', 'dark'],
//     }
//   },
// }
