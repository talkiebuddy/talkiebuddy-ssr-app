export const storyFactory = (options) => {
  const { title, component, args, argTypes, description } = options

  return {
    title,
    component,
    args: {
      // dark: true,
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
        description: {
          component: description,
        },
      },
    },
  }
}
