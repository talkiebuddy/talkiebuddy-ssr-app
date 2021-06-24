import MNavList from '../MNavList'
import { storyFactory } from '~/plugins/util/helpers'

export default storyFactory({
  title: 'Atomic Design/Molecule/Navigation List',
  component: MNavList,
  description:
    'The completed documentation will sooner release. This docs is about Navigation List Atom',
  argTypes: {
    list: { control: { type: 'object' } },
  },
})

const wrapper = {
  components: {
    MNavList,
  },
}

const listRoute = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'About Us',
    to: '/about',
  },
]

const listHref = [
  {
    label: 'Google',
    href: 'https://google.com',
  },
  {
    label: 'Talkie Buddy',
    href: 'https://talkiebuddy.com',
  },
]

const Template = (args, { argTypes }) => ({
  ...wrapper,
  props: Object.keys(argTypes),
  template: '<m-nav-list :list="list" v-bind="$props"></m-nav-list>',
})

export const HorizontalList = Template.bind({})
HorizontalList.args = {
  list: listRoute,
}

export const VerticalList = Template.bind({})
VerticalList.args = {
  list: listHref,
  direction: 'vertical',
}
