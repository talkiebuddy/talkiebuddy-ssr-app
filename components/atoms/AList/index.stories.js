import AList from '.'
import { storyFactory } from '~/plugins/util/helpers'

export default storyFactory({
  title: 'Design System/Atom/List',
  component: AList,
  description:
    'The completed documentation will sooner release. This docs is about List Atom',
  argTypes: {},
  excludeStories: /.*Data$/,
})

const wrapper = {
  components: {
    AList,
  },
}

// const Template = (args, { argTypes }) => ({
//   ...wrapper,
//   props: Object.keys(argTypes),
//   template: '<a-list v-bind="$props"></a-list>'
// })

// export const Playground = Template.bind({})
// Playground.args = {
//   src: 'logo.png',
//   alt: 'vue logo'
// }

export const Unordered = () => ({
  ...wrapper,
  template: `
  <a-list>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </a-list>`,
})

export const Ordered = () => ({
  ...wrapper,
  template: `
  <a-list ordered>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </a-list>
  `,
})
