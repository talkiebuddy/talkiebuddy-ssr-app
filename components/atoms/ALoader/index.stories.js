import ALoader from './index.vue'
import { storyFactory } from '~/.storybook/util/helpers'

export default storyFactory({
  title: 'Atom/Loader',
  component: ALoader,
  description: 'The completed documentation will sooner release. This docs is about Loader Atom'
})

const wrapper = {
  components: { ALoader }
}

const Template = (args, { argTypes }) => ({
  ...wrapper,
  props: Object.keys(argTypes),
  template: '<a-loader v-bind="$props"></a-loader>'
})

export const Playground = Template.bind({})
Playground.args = {
  size: 'small',
  type: 'dot'
}
