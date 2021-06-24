// import { action } from '@storybook/addon-actions'
import TAuthenticate from './index.vue'
import data from './data'
import { storyFactory } from '~/plugins/util/helpers'

export default storyFactory({
  title: 'Atomic Design/Template/Authenticate',
  component: TAuthenticate,
  description:
    'The completed documentation will sooner release. This docs is about Table Cell Atom',
})

const wrapper = {
  components: {
    TAuthenticate,
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
  data() {
    return {
      data,
    }
  },
  ...wrapper,
  template: `<t-authenticate :auth-data="data"></t-authenticate>`,
})
