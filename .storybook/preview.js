import { themes } from '@storybook/theming'
import { parameters as nuxtParameters } from "~~/.nuxt-storybook/storybook/preview.js";

export * from "~~/.nuxt-storybook/storybook/preview.js";

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
  ...nuxtParameters,
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'white',
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
        value: '#1e2225',
      },
    ],
  },
  darkMode: {
    // Override the default dark theme
    dark: {
      ...themes.dark,
      brandTitle: 'Sandbox Talkiebuddy',
      brandUrl: 'https://talkiebuddy.com',
    },
    // Override the default light theme
    light: {
      ...themes.light,
      brandTitle: 'Sandbox Talkiebuddy',
      brandUrl: 'https://talkiebuddy.com',
    },
  },
  designToken: {
    files: {
      scss: scssTokenFiles,
      svgIcons: svgIconTokenFiles,
    },
    options: {
      hideMatchingHardCodedValues: false,
    },
  },
  dependencies: { withStoriesOnly: true, hideEmpty: true },
  options: {
    storySort: {
      order: ['Intro', 'Atomic Design', ['Atom', 'Molecule', 'Organism', 'Template', 'Page'],],
    },
    panelPosition: 'right',
  },

};

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
