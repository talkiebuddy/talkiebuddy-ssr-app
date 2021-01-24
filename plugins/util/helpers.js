const scssReq = require.context('!!raw-loader!@/assets/scss/', true, /.\.scss$/)

const scssTokenFiles = scssReq
  .keys()
  .map((filename) => ({ filename, content: scssReq(filename).default }))

const svgIconsReq = require.context(
  '!!raw-loader!@/assets/images/icons',
  true,
  /.\.svg$/
)

const svgIconTokenFiles = svgIconsReq
  .keys()
  .map((filename) => ({ filename, content: svgIconsReq(filename).default }))

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
        description: {
          component: description,
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
    },
  }
}
