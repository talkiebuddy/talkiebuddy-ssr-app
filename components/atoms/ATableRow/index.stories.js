// import { action } from '@storybook/addon-actions'
import ATableCell from '../ATableCell'
import ATableRow from './index.vue'
import { storyFactory } from '~/.storybook/util/helpers'

export default storyFactory({
  title: 'Design System/Molecule/Table Row',
  component: { ATableRow, ATableCell },
  description: 'The completed documentation will sooner release. This docs is about Table Row Molecule'
})

const wrapper = {
  components: {
    ATableRow,
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

export const Th = () => ({
  ...wrapper,
  template: `
  <a-table-row>
    <a-table-cell heading>Cell 1</a-table-cell>
    <a-table-cell heading>Cell 2</a-table-cell>
  </a-table-row>
  `
})

export const Td = () => ({
  ...wrapper,
  template: `
  <a-table-row>
    <a-table-cell>Cell 1</a-table-cell>
    <a-table-cell>Cell 2</a-table-cell>
  </a-table-row>
  `
})
