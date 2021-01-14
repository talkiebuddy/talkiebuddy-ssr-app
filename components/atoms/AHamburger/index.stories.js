import { action } from '@storybook/addon-actions'
import AHamburger from './index.vue'
import { storyFactory } from '~/.storybook/util/helpers'

export default storyFactory({
  title: 'Design System/Atom/Hamburger',
  component: AHamburger,
  description: 'The completed documentation will sooner release. This docs is about Hamburger Atom',
  argTypes: {
  }
})

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AHamburger },
  template: '<a-hamburger v-bind="$props" @click="action" ></a-hamburger>',
  methods: {
    action: action('hamburger clicked')
  }
})

export const Playground = Template.bind({})
Playground.args = {
  isOpen: false
}

// export const Open = () => ({
//   components: { AHamburger },
//   template: `
//   <div>
//     <p>State Open</p>
//     <a-hamburger :isOpen="true"></a-hamburger>
//     <p>State Close</p>
//     <a-hamburger :isOpen="false"></a-hamburger>
//   </div>
//   `
// })
