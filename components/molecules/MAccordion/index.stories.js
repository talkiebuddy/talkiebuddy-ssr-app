import MAccordion from '.'
import { storyFactory } from '~/plugins/util/helpers'

export default storyFactory({
  title: 'Design System/Molecule/Accordion',
  component: MAccordion,
  description:
    'The completed documentation will sooner release. This docs is about Accordion Molecule',
  argTypes: {},
})

const wrapper = {
  components: {
    MAccordion,
  },
}

const items = [
  {
    title: 'Title 1',
    content: 'Content 1',
  },
  {
    title: 'Title 2',
    content: 'Content 2',
  },
  {
    title: 'Title 3',
    content: 'Content 3',
  },
  {
    title: 'Title 4',
    content:
      '<h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>',
  },
]

const Template = (args, { argTypes }) => ({
  ...wrapper,
  props: Object.keys(argTypes),
  template: '<m-accordion v-bind="$props"></m-accordion>',
})

export const Playground = Template.bind({})
Playground.args = {
  items,
}
