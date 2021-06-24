// import { action } from '@storybook/addon-actions'
import PSignIn from './index.vue'
import { storyFactory } from '~/plugins/util/helpers'

export default storyFactory({
  title: 'Atomic Design/Page/Sign In',
  component: PSignIn,
  description:
    'The completed documentation will sooner release. This docs is about Table Cell Atom',
})

const wrapper = {
  components: {
    PSignIn,
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
    <p-sign-in></p-sign-in>
  `,
})
