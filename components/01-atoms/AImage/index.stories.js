import AImage from '../AImage'
import { storyFactory } from '~/plugins/util/helpers'

export default storyFactory({
  title: 'Atomic Design/Atom/Image',
  component: AImage,
  description:
    'The completed documentation will sooner release. This docs is about Images Atom',
  argTypes: {},
  excludeStories: /.*Data$/,
})

const wrapper = {
  components: {
    AImage,
  },
}

const Template = (args, { argTypes }) => ({
  ...wrapper,
  props: Object.keys(argTypes),
  template: '<a-image v-bind="$props"></a-image>',
})

export const Playground = Template.bind({})
Playground.args = {
  src: 'logo.png',
  alt: 'vue logo',
}

export const LocalImage = () => ({
  ...wrapper,
  template: '<a-image src="logo.png" alt="vue logo"></a-image>',
})

export const UrlImage = () => ({
  ...wrapper,
  template:
    '<a-image src="https://source.unsplash.com/random/400x300" alt="unsplash image"></a-image>',
})

export const PictureTag = () => ({
  ...wrapper,
  template: `
  <a-image
    src="https://via.placeholder.com/800x800"
    :sources="sources"
    picture
  />
  `,
  data() {
    return {
      sources: [
        {
          srcset: 'https://via.placeholder.com/300x300',
          media: '(max-width: 300px)',
        },
        {
          srcset: 'https://via.placeholder.com/600x600',
          media: '(max-width: 600px)',
        },
      ],
    }
  },
})
