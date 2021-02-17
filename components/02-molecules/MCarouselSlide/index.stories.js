import MCarouselSlide from '../MCarouselSlide'
import { storyFactory } from '~/plugins/util/helpers'

export default storyFactory({
  title: 'Design System/Molecule/Carousel Slide',
  component: MCarouselSlide,
  description:
    'The completed documentation will sooner release. This docs is about Carousel Slide Molecule',
  argTypes: {},
})

const wrapper = {
  components: {
    MCarouselSlide,
  },
}

// const Template = (args, { argTypes }) => ({
//   ...wrapper,
//   props: Object.keys(argTypes),
//   template: '<m-carousel-slide v-bind="$props"></m-carousel-slide>',
// })

// export const Playground = Template.bind({})
// Playground.args = {
//   backgroundColor: 'blue',
// }

export const Background = () => ({
  ...wrapper,
  template: `
      <m-carousel-slide backgroundColor="blue">
        Slide Content
      </m-carousel-slide>
    `,
})
