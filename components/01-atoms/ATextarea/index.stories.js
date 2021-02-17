import ATextarea from '../ATextarea'
import { storyFactory } from '~/plugins/util/helpers'

export default storyFactory({
  title: 'Design System/Atom/Textarea',
  component: ATextarea,
  description:
    'The completed documentation will sooner release. This docs is about Input Textarea Atom',
  argTypes: {},
})

const wrapper = {
  components: { ATextarea },
}

const Template = (args, { argTypes }) => ({
  ...wrapper,
  props: Object.keys(argTypes),
  template: `
  <div>
    <a-textarea v-model="inputValue" v-bind="$props"></a-textarea>

    <br/><br/>

    Value :
    <br/>
    {{ inputValue }}
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
  placeholder: 'Enter your text',
  inputValue:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
}
