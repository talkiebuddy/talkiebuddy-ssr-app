// import { action } from '@storybook/addon-actions'
import ATableCell from './index.vue'
import { storyFactory } from '~/plugins/util/helpers'

export default storyFactory({
  title: 'Atomic Design/Atom/Table Cell',
  component: ATableCell,
  description:
    'The completed documentation will sooner release. This docs is about Table Cell Atom',
})

const wrapper = {
  components: {
    ATableCell,
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
    <tr>
    <a-table-cell>Table Cell Content</a-table-cell>
    </tr>
  `,
})
