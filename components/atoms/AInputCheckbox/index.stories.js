import AInputCheckbox from '.'
import { storyFactory } from '~/.storybook/util/helpers'

export default storyFactory({
  title: 'Design System/Atom/Input Checkbox',
  component: AInputCheckbox,
  description: 'The completed documentation will sooner release. This docs is about Input Checkbox Atom',
  argTypes: {

  }
})

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AInputCheckbox },
  template: '<a-input-checkbox v-bind="$props"></a-input-checkbox>'
})

export const Playground = Template.bind({})
Playground.args = {

}
