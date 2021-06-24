import MAlert from './index.vue'
import { storyFactory } from '~/plugins/util/helpers'

export default storyFactory({
  title: 'Atomic Design/Molecule/Alert',
  component: MAlert,
  description:
    'The completed documentation will sooner release. This docs is about Carousel Slide Molecule',
  argTypes: {},
})

const wrapper = {
  components: {
    MAlert,
  },
}

const Template = (args, { argTypes }) => ({
  ...wrapper,
  props: Object.keys(argTypes),
  template: '<m-alert v-bind="$props">Hi, I am an alert!</m-alert>',
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
      <m-alert borderColor="#46bd87" backgroundColor="#46bd87" textColor="#fff">Hi, I am an alert!</m-alert>
    `,
})
