import ATextarea from './index.vue'
import { storyFactory } from '~/.storybook/util/helpers'

export default storyFactory({
  title: 'Design System/Atom/Textarea',
  component: ATextarea,
  description: 'The completed documentation will sooner release. This docs is about Input Text Atom',
  argTypes: {

  }
})

const Template = (_, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ATextarea },
  template: '<a-textarea v-bind="$props"></a-textarea>'
})

export const Playground = Template.bind({})
Playground.args = {
  placeholder: 'boleehh dicoba dulu'
}

// export const Type = () => ({
//   components: { ATextarea },
//   template: `
//   <div>
//     <a-textarea placeholder="dicoba" v-model="inputValue"></a-textarea>
//     {{inputValue}}
//   </div>
//   `,
//   data () {
//     return {
//       inputValue: ''
//     }
//   }
// })
