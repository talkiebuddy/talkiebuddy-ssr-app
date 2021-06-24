import MTabs from './index.vue'
import { storyFactory } from '~/plugins/util/helpers'

export default storyFactory({
  title: 'Atomic Design/Molecule/Tabs',
  component: MTabs,
  description:
    'The completed documentation will sooner release. This docs is about Carousel Slide Molecule',
  argTypes: {},
})

const wrapper = {
  components: {
    MTabs,
  },
}

const Template = (args, { argTypes }) => ({
  ...wrapper,
  props: Object.keys(argTypes),
  template: '<m-tabs v-bind="$props">Hi, I am an alert!</m-tabs>',
})

export const Playground = Template.bind({})
Playground.args = {
  backgroundColor: '#46bd87',
  borderColor: '#46bd87',
  textColor: '#fff',
}

export const Background = () => ({
  ...wrapper,
  template: `
      <m-tabs :names="['Tab Bagian 1', 'Tab Bagian 2', 'tab2']">
        <template v-slot:tab0>
          Tab 0 content
        </template>
        <template v-slot:tab1>
          Tab 1 content
        </template>
        <template v-slot:tab2>
          Tab 2 content
        </template>
      </m-tabs>
    `,
})
