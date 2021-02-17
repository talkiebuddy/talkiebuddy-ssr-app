import ASelect from '../ASelect'
import { storyFactory } from '~/plugins/util/helpers'

export default storyFactory({
  title: 'Design System/Atom/Select',
  component: ASelect,
  description:
    'The completed documentation will sooner release. This docs is about Select Atom',
  argTypes: {},
})

const wrapper = {
  components: { ASelect },
}

const Template = (args, { argTypes }) => ({
  ...wrapper,
  props: Object.keys(argTypes),
  template: '<a-select v-bind="$props"></a-select>',
})

export const Playground = Template.bind({})
Playground.args = {
  selectedValue: 'b',
  options: [
    {
      label: 'Option A',
      value: 'a',
    },
    {
      label: 'Option B',
      value: 'b',
    },
    {
      label: 'Option C',
      value: 'c',
    },
    {
      label: 'Option D',
      value: 'd',
      disabled: true,
    },
  ],
}
