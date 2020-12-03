import LogoImageSkeleton from '@/assets/images/skeleton/logo.png'
import CardImageSkeleton from '@/assets/images/skeleton/400x300.png'
import GalleryImageSkeleton from '@/assets/images/skeleton/600x400.png'
import GalleryThumbSkeleton from '@/assets/images/skeleton/200x130.png'

import { files, text, select } from '@storybook/addon-knobs'
import AImage from './index.vue'
import { storyFactory } from '~/.storybook/util/helpers'

export default storyFactory({
  title: 'Atom/Image',
  component: AImage,
  description: 'The completed documentation will sooner release. This docs is about Image Atom',
  parameters: {
    controls: {
      disabled: true
    }
  },
  excludeStories: /.*Data$/
})

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AImage },
  template: '<a-image v-bind="$props"/>'
})

// export const Sandbox = Template.bind({});
// Sandbox.args = {
//   src: LogoImageSkeleton,
//   alt: 'logo'
// };

export const Sandbox = () => ({
  components: { AImage },
  props: {
    variant: {
      default: select('Variant', { Default: 'normal', Logo: 'logo', Card: 'card', GalleryImage: 'gallery-image', GalleryThumb: 'gallery-thumb' })
    },
    file: {
      default: files('Image', ['.jpg', '.png'], [])
    },
    alt: {
      default: text('Alt', '')
    }
  },
  template: `
    <a-image :variant="variant" :src="file[0] ? file[0] : undefined" :alt="alt"/>
    `
})

export const LogoImage = Template.bind({})
LogoImage.args = {
  src: LogoImageSkeleton,
  alt: 'logo'
}

export const CardImage = Template.bind({})
CardImage.args = {
  src: CardImageSkeleton,
  alt: 'logo'
}

export const GalleryImage = Template.bind({})
GalleryImage.args = {
  src: GalleryImageSkeleton,
  alt: 'logo'
}

export const GalleryThumb = Template.bind({})
GalleryThumb.args = {
  src: GalleryThumbSkeleton,
  alt: 'logo'
}
