import MCard from './index.vue'
import { storyFactory } from '~/plugins/util/helpers'

export default storyFactory({
  title: 'Atomic Design/Molecule/Dropdown',
  component: MCard,
  description:
    'The completed documentation will sooner release. This docs is about Carousel Slide Molecule',
  argTypes: {},
})

const wrapper = {
  components: {
    MCard,
  },
}

const Template = (args, { argTypes }) => ({
  ...wrapper,
  props: Object.keys(argTypes),
  template: '<m-dropdown v-bind="$props"></m-dropdown>',
})

export const Playground = Template.bind({})
Playground.args = {}

// export const Background = () => ({
//   ...wrapper,
//   template: `
//       <m-tabs :names="['Tab Bagian 1', 'Tab Bagian 2', 'tab2']">
//         <template v-slot:tab0>
//           Tab 0 content
//         </template>
//         <template v-slot:tab1>
//           Tab 1 content
//         </template>
//         <template v-slot:tab2>
//           Tab 2 content
//         </template>
//       </m-tabs>
//     `,
// })
