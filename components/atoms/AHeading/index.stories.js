import AHeading from './index.vue'
import { storyFactory } from '~/.storybook/util/helpers'

export default storyFactory({
  title: 'Atom/Heading',
  component: AHeading,
  description: 'The completed documentation will sooner release. This docs is about Heading Atom',
  argTypes: {
    level: {
      control: {
        type: 'select',
        options: [
          '1',
          '2',
          '3',
          '4'
        ]
      }
    },
    text: {
      control: 'text'
    }
  }
})

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AHeading },
  template: '<a-heading v-bind="$props">{{text}}</a-heading'
})

export const Sandbox = Template.bind({})
Sandbox.args = {
  level: 1,
  text: 'Heading 1'
}
