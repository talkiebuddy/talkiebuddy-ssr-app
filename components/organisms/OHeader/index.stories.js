import OHeader from './index.vue'
import { storyFactory } from '~/.storybook/util/helpers'

export default storyFactory({
  title: 'Design System/Organism/Header',
  component: OHeader,
  description: 'The completed documentation will sooner release. This docs is about Navigation Header Organism',
  argTypes: {
    list: { control: { type: 'object' } }
  }
})

const listNav = [
  {
    label: 'Home',
    to: '/'
  },
  {
    label: 'About Us',
    to: '/about'
  }
]

const wrapper = {
  components: {
    OHeader
  }
}

const Template = (args, { argTypes }) => ({
  ...wrapper,
  props: Object.keys(argTypes),
  template: '<o-header :navList="navList" v-bind="$props"></o-header>'
})

export const Playground = Template.bind({})
Playground.args = {
  navList: listNav
}
