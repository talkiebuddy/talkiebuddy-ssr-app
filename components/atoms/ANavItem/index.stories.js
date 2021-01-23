import { action } from '@storybook/addon-actions'
import ANavItem from './index.vue'
import { storyFactory } from '~/plugins/util/helpers'

export default storyFactory({
  title: 'Design System/Atom/Navigation Item',
  component: ANavItem,
  description:
    'The completed documentation will sooner release. This docs is about Navigation Item Atom',
})

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ANavItem },
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
