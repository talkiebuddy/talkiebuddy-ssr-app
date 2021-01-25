import AInputText from '.'
import { storyFactory } from '~/plugins/util/helpers'

export default storyFactory({
  title: 'Design System/Atom/Input Text',
  component: AInputText,
  description:
    'The completed documentation will sooner release. This docs is about Input Text Atom',
  argTypes: {},
})

const wrapper = {
  components: {
    AInputText,
  },
}

const Template = (args, { argTypes }) => ({
  ...wrapper,
  props: Object.keys(argTypes),
  template: `
  <div>
    <a-input-text v-model="inputValue" v-bind="$props"></a-input-text>

    <br/><br/>

    Value :
    <pre>{{ inputValue }}</pre>
  </div>
  `,
  data() {
    return {
      inputValue: '',
    }
  },
})

export const Playground = Template.bind({})
Playground.args = {
  type: 'text',
}

export const Type = () => ({
  ...wrapper,
  template: `
  <div>
    <a-input-text type="password" v-model="inputValue"></a-input-text>

    <br/><br/>

    Value :
    <pre>{{ inputValue }}</pre>
  </div>
  `,
  data() {
    return {
      inputValue: '',
    }
  },
})
