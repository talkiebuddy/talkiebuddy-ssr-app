import { DocsPage } from 'storybook-addon-deps/blocks'

export const storyFactory = (options) => {
  const { title, component, args, argTypes, description } = options

  return {
    title,
    component,
    args: {
      ...args,
    },
    argTypes: {
      locale: {
        defaultValue: 'en',
        control: {
          type: 'inline-radio',
          options: { English: 'en', Indonesia: 'in' },
        },
        table: {
          category: 'Locale',
        },
      },
      ...argTypes,
    },
    parameters: {
      docs: {
        page: DocsPage,
        description: {
          component: description,
        },
      },
    },
  }
}
