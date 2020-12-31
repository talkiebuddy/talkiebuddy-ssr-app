import OHeader from './index.vue'
import { storyFactory } from '~/.storybook/util/helpers'

export default storyFactory({
  title: 'Organism/Header',
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

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { OHeader },
  template: '<o-header :navList="navList" v-bind="$props"></o-header>'
})

export const Header = Template.bind({})
Header.args = {
  navList: listNav
}
