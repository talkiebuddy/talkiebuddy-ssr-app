import AInputText from './index.vue'
import { storyFactory } from '~/.storybook/util/helpers'

export default storyFactory({
  title: 'Design System/Atom/InputText',
  component: AInputText,
  description: 'The completed documentation will sooner release. This docs is about Input Text Atom',
  argTypes: {

  }
})

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AInputText },
  template: '<a-input-text v-bind="$props"></a-input-text>'
})

export const Playground = Template.bind({})
Playground.args = {
  type: 'text',
  defaultValue: 40
}

export const Type = () => ({
  components: { AInputText },
  template: `
  <div>
    <a-input-text type="password" v-model="inputValue"></a-input-text>
    {{inputValue}}
  </div>
  `,
  data () {
    return {
      inputValue: ''
    }
  }
})
