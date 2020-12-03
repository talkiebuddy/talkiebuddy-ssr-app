import ANavItem from './index.vue'
import { storyFactory } from '~/.storybook/util/helpers'
// import { action } from '@storybook/addon-actions'

export default storyFactory({
  title: 'Atom/Navigation Item',
  component: ANavItem,
  description: 'The completed documentation will sooner release. This docs is about Navigation Item Atom'
})

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ANavItem },
  template: '<a-nav-item to="/nav-item-1" @click="action">Sample Nav Item</a-nav-item>'
})

export const Sandbox = Template.bind({})
