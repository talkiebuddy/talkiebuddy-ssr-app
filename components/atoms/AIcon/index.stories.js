import AIcon from './index.vue'
import { storyFactory } from '~/.storybook/util/helpers'

export default storyFactory({
  title: 'Atom/Icon',
  component: AIcon,
  description: 'The completed documentation will sooner release. This docs is about Icon Atom',
  argTypes: {
    name: { control: { type: 'select', options: ['twitter', 'eye', 'eye-invisible', 'audio', 'meh'] } },
    fill: { control: 'color' },
    size: { control: { type: 'select', options: ['x-small', 'base', 'small', 'medium', 'large'] } }
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
      <a-icon name="twitter" size="medium"></a-icon>
      <a-icon name="twitter" size="large"></a-icon>
    </div>
    `
})

export const Color = () => ({
  components: { AIcon },
  template: `
    <div>
      <a-icon name="twitter" fill="black"></a-icon>
      <a-icon name="twitter" fill="red"></a-icon>
      <a-icon name="twitter" fill="green"></a-icon>
    </div>
    `
})
