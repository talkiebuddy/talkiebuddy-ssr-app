import AHr from './index.vue'
import { storyFactory } from '~/plugins/util/helpers'

export default storyFactory({
  title: 'Atomic Design/Atom/Hr',
  component: AHr,
  description:
    'The completed documentation will sooner release. This docs is about Select Atom',
  argTypes: {},
})

const wrapper = {
  components: { AHr },
}

const Template = (args, { argTypes }) => ({
  ...wrapper,
  props: Object.keys(argTypes),
  template: '<a-hr v-bind="$props"></a-hr>',
})

export const Playground = Template.bind({})
Playground.args = {}
