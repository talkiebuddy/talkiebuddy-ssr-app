import AHeading from '../AHeading'
import { storyFactory } from '~/plugins/util/helpers'

export default storyFactory({
  title: 'Atomic Design/Atom/Heading',
  component: AHeading,
  description:
    'The completed documentation will sooner release. This docs is about Heading Atom',
  argTypes: {
    level: {
      name: 'level',
      type: { name: 'number', required: true },
      description: 'Data need : ',
      defaultValue: 1,
      control: {
        type: 'select',
        options: [1, 2, 3, 4, 5, 6],
      },
    },
    text: {
      type: { name: 'string', required: true },
      control: 'text',
    },
  },
})

const wrapper = {
  components: {
    AHeading,
  },
}

const Template = (args, { argTypes }) => ({
  ...wrapper,
  props: Object.keys(argTypes),
  template: '<a-heading v-bind="$props">{{text}}</a-heading>',
})

export const Playground = Template.bind({})
Playground.args = {
  level: 1,
  text: 'Heading 1',
}

export const Level = () => ({
  ...wrapper,
  template: `
  <div>
    <a-heading>Heading 1</a-heading>
    <a-heading :level="2">Heading 2</a-heading>
    <a-heading :level="3">Heading 3</a-heading>
    <a-heading :level="4">Heading 4</a-heading>
    <a-heading :level="5">Heading 5</a-heading>
    <a-heading :level="6">Heading 6</a-heading>
  </div>
  `,
})
