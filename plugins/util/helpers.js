import { DocsPage } from 'storybook-addon-deps/blocks'

export const storyFactory = (options) => {
  const { title, component, args, argTypes, parameters, description } = options

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
      ...parameters,
      docs: {
        page: DocsPage,
        description: {
          component: description,
        },
      },
    },
  }
}
