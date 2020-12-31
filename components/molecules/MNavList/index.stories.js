import MNavList from './index.vue'
import { storyFactory } from '~/.storybook/util/helpers'

export default storyFactory({
  title: 'Molecule/Navigation List',
  component: MNavList,
  description: 'The completed documentation will sooner release. This docs is about Navigation List Atom',
  argTypes: {
    list: { control: { type: 'object' } }
  }
})

const listRoute = [
  {
    label: 'Home',
    to: '/'
  },
  {
    label: 'About Us',
    to: '/about'
  }
]

const listHref = [
  {
    label: 'Google',
    href: 'https://google.com'
  },
  {
    label: 'Talkie Buddy',
    href: 'https://talkiebuddy.com'
  }
]

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MNavList },
  template: '<m-nav-list :list="list" v-bind="$props"></m-nav-list>'
})

export const HorizontalList = Template.bind({})
HorizontalList.args = {
  list: listRoute
}

export const VerticalList = Template.bind({})
VerticalList.args = {
  list: listHref,
  direction: 'vertical'
}
