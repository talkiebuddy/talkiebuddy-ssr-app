// import { action } from '@storybook/addon-actions'
import PSignUp from './index.vue'
import { storyFactory } from '~/plugins/util/helpers'

export default storyFactory({
  title: 'Atomic Design/Page/Sign Up',
  component: PSignUp,
  description:
    'The completed documentation will sooner release. This docs is about Table Cell Atom',
})

const wrapper = {
  components: {
    PSignUp,
  },
}

// const Template = (args, { argTypes }) => ({
//   props: Object.keys(argTypes),
//   ...wrapper,
//   template: '<a-table-cell v-bind="$props" @click="action"></a-table-cell>',
//   methods: {
//     action: action('button clicked')
//   }
// })

// export const Playground = Template.bind({})
// Playground.args = {
//   slots: 'Row Content'
// }

export const Test = () => ({
  ...wrapper,
  template: `
    <p-sign-up></p-sign-up>
  `,
})
