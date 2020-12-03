import TTypography from './index.vue'
import { storyFactory } from '~/.storybook/util/helpers'

export default storyFactory({
  title: 'Token/Typography',
  component: TTypography,
  description: 'Tokenn',
  argTypes: {
    typographys: { control: { type: 'object' } }
  }
})

const typography = [
  {
    typographySize: '0.65rem',
    typographyName: '$text-size-small-extra'
  },
  {
    typographySize: '0.75rem',
    typographyName: '$text-size-small'
  },
  {
    typographySize: '0.88rem',
    typographyName: '$text-size-normal'
  },
  {
    typographySize: '1rem',
    typographyName: '$text-size-normal-large'
  },
  {
    typographySize: '1.25rem',
    typographyName: '$text-size-medium'
  },
  {
    typographySize: '1.5rem',
    typographyName: '$text-size-medium-large'
  }
]

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TTypography },
  template: '<div><p>{{title}}</p><ul class="t-typography"><li v-for="typography in typographys"><t-typography :typographySize="typography.typographySize" :typographyName="typography.typographyName"/></li></ul></div>'
})

export const Normal = Template.bind({})
Normal.args = {
  title: 'Typography',
  typographys: typography
}
