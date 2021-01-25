import MCarouselSlide from '../MCarouselSlide/index.vue'
import MCarousel from '.'
import { storyFactory } from '~/plugins/util/helpers'

export default storyFactory({
  title: 'Design System/Molecule/Carousel ',
  component: {
    MCarousel,
    MCarouselSlide,
  },
  description:
    'The completed documentation will sooner release. This docs is about Carousel Molecule',
  argTypes: {},
})

const wrapper = {
  components: {
    MCarousel,
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
//   ',
// }

export const Default = () => ({
  ...wrapper,
  template: `
      <m-carousel>
        <m-carousel-slide>
          -slide 1
        </m-carousel-slide>
        <m-carousel-slide>
          -slide 2
        </m-carousel-slide>
        <m-carousel-slide>
          -slide 3
        </m-carousel-slide>
      </m-carousel>
    `,
})

export const Loop = () => ({
  ...wrapper,
  template: `
      <m-carousel loop>
        <m-carousel-slide>
          -slide 1
        </m-carousel-slide>
        <m-carousel-slide>
          -slide 2
        </m-carousel-slide>
        <m-carousel-slide>
          -slide 3
        </m-carousel-slide>
      </m-carousel>
    `,
})

export const NoDotted = () => ({
  ...wrapper,
  template: `
      <m-carousel :dottedNav="false">
        <m-carousel-slide>
          -slide 1
        </m-carousel-slide>
        <m-carousel-slide>
          -slide 2
        </m-carousel-slide>
        <m-carousel-slide>
          -slide 3
        </m-carousel-slide>
      </m-carousel>
    `,
})

export const NoArrow = () => ({
  ...wrapper,
  template: `
      <m-carousel :arrowNavigation="false">
        <m-carousel-slide>
          -slide 1
        </m-carousel-slide>
        <m-carousel-slide>
          -slide 2
        </m-carousel-slide>
        <m-carousel-slide>
          -slide 3
        </m-carousel-slide>
      </m-carousel>
    `,
})
