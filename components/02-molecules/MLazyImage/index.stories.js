import MLazyImage from '../MLazyImage'
import { storyFactory } from '~/plugins/util/helpers'

export default storyFactory({
  title: 'Atomic Design/Molecule/Lazy Image',
  component: MLazyImage,
  description:
    'The completed documentation will sooner release. This docs is about Lazy Image Molecule',
  argTypes: {},
})

const wrapper = {
  components: {
    MLazyImage,
  },
}

const Template = (args, { argTypes }) => ({
  ...wrapper,
  props: Object.keys(argTypes),
  template: '<m-lazy-image v-bind="$props"></m-lazy-image>',
})

export const Playground = Template.bind({})
Playground.args = {
  src: 'example.jpg',
  aspectRation: '1.769',
}

export const CustomPlaceholder = () => ({
  ...wrapper,
  template: `
      <m-lazy-image
        src="logo.png"
        placeholderGraphic="yosushi-logo"
        :aspectRatio="1.769"
      />
    `,
})
