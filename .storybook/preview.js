export * from '~~/.nuxt-storybook/storybook/preview.js'

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
}
