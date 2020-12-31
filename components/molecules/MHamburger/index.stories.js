import { action } from '@storybook/addon-actions'
import MButtonIcon from './index.vue'
import { storyFactory } from '~/.storybook/util/helpers.js'

export default storyFactory({
  title: 'Molecule/ButtonIcon',
  component: MButtonIcon,
  description: 'The completed documentation will sooner release. This docs is about Button Atom',
  argTypes: {
    // backgroundColor: { control: 'color' },
    // labelColor: { control: 'color' },
    // iconColor: { control: { type: 'select', options: ['red', 'black'] } },
    // size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    // type: { control: { type: 'select', options: ['a', 'button', 'router-link'] } },
    // label: { control: 'text' }
  },
  excludeStories: /.*Data$/
})

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MButtonIcon },
  template: '<m-button-icon @onClick="action" v-bind="$props"/>',
  methods: { action: action('clicked') }
})

export const Sandbox = Template.bind({})
Sandbox.args = {
  type: 'button'
}
