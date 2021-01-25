import { action } from '@storybook/addon-actions'
import AHamburger from '.'
import { storyFactory } from '~/plugins/util/helpers'

export default storyFactory({
  title: 'Design System/Atom/Hamburger',
  component: AHamburger,
  description:
    'The completed documentation will sooner release. This docs is about Hamburger Atom',
  argTypes: {},
})

const wrapper = {
  components: {
    AHamburger,
  },
}

const Template = (args, { argTypes }) => ({
  ...wrapper,
  props: Object.keys(argTypes),
  template: '<a-hamburger v-bind="$props" @click="action" ></a-hamburger>',
  methods: {
    action: action('hamburger clicked'),
  },
})

export const Playground = Template.bind({})
Playground.args = {
  isOpen: false,
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
