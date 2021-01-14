// import { action } from '@storybook/addon-actions'
import ATableCell from '../../atoms/ATableCell'
import MTableRow from './index.vue'
import { storyFactory } from '~/.storybook/util/helpers'

export default storyFactory({
  title: 'Design System/Molecule/Table Row',
  component: { MTableRow, ATableCell },
  description: 'The completed documentation will sooner release. This docs is about Table Row Molecule'
})

const wrapper = {
  components: {
    MTableRow,
    ATableCell
  }
}

// const Template = (args, { argTypes }) => ({
//   props: Object.keys(argTypes),
//   components: { MTableRow },
//   template: '<a-table-row v-bind="$props" @click="action">Sample Nav Item</a-table-row>',
//   methods: {
//     action: action('button clicked')
//   }
// })

// export const Playground = Template.bind({})
// Playground.args = {
//   to: '/nav-item-1'
// }

export const Test = () => ({
  ...wrapper,
  template: `
  <a-table-row>
    <a-table-cell>Cell 1</a-table-cell>
    <a-table-cell>Cell 2</a-table-cell>
  </a-table-row>
  `
})
