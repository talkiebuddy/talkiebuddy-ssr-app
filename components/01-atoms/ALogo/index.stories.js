import ALogo from '../ALogo'
import { storyFactory } from '~/plugins/util/helpers'

export default storyFactory({
  title: 'Atomic Design/Atom/Logo',
  component: ALogo,
  description:
    'The completed documentation will sooner release. This docs is about Logo Atom',
})

const wrapper = {
  components: { ALogo },
}

const Template = (args, { argTypes }) => ({
  ...wrapper,
  props: Object.keys(argTypes),
  template: '<a-logo v-bind="$props"></a-logo>',
})

export const Playground = Template.bind({})
Playground.args = {}
