import { action } from '@storybook/addon-actions'
import ANavItem from '../ANavItem'
import { storyFactory } from '~/plugins/util/helpers'

export default storyFactory({
  title: 'Design System/Atom/Navigation Item',
  component: ANavItem,
  description:
    'The completed documentation will sooner release. This docs is about Navigation Item Atom',
})

const wrapper = {
  components: { ANavItem },
}

const Template = (args, { argTypes }) => ({
  ...wrapper,
  props: Object.keys(argTypes),
  template:
    '<a-nav-item v-bind="$props" @click="action">Sample Nav Item</a-nav-item>',
  methods: {
    action: action('button clicked'),
  },
})

export const Playground = Template.bind({})
Playground.args = {
  to: '/nav-item-1',
}
