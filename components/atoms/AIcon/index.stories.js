import AIcon from './index.vue'
import { storyFactory } from '~/.storybook/util/helpers'

export default storyFactory({
  title: 'Atom/Icon',
  component: AIcon,
  description: 'The completed documentation will sooner release. This docs is about Icon Atom',
  argTypes: {
    name: { control: { type: 'select', options: ['twitter', 'linkedin', 'arrow-left'] } },
    color: { control: { type: 'select', options: ['red', 'black'] } },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } }
  }
})

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AIcon },
  template: '<a-icon v-bind="$props"></a-icon>'
})

export const Sandbox = Template.bind({})
Sandbox.args = {
  name: 'twitter'
}

export const Size = () => ({
  components: { AIcon },
  template: `
    <div>
      <a-icon name="twitter" size="small"></a-icon>
      <AIcon name="twitter" size="medium" />
      <AIcon name="twitter" size="large" />
    </div>
    `
})
