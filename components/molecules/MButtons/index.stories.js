import { action } from '@storybook/addon-actions'
import MButtons from './index.vue'
import { storyFactory } from '~/.storybook/util/helpers.js'

export default storyFactory({
  title: 'Molecule/Buttons',
  component: MButtons,
  description: 'The completed documentation will sooner release. This docs is about Button Atom',
  argTypes: {
    backgroundColor: { control: 'color' },
    labelColor: { control: 'color' },
    iconColor: { control: 'color' },
    size: { control: { type: 'select', options: ['x-small', 'small', 'medium', 'large'] } },
    type: { control: { type: 'select', options: ['a', 'button', 'router-link'] } },
    label: { control: 'text' },
    variant: { control: { type: 'select', options: ['default', 'primary', 'success', 'info', 'danger', 'warning'] } }
  },
  excludeStories: /.*Data$/
})

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MButtons },
  template: '<m-buttons @onClick="action" :style="styles" v-bind="$props" />',
  computed: {
    styles () {
      return {
        backgroundColor: this.backgroundColor
      }
    }
  },
  methods: { action: action('clicked') }
})

export const Playground = Template.bind({})
Playground.args = {
  type: 'button',
  label: 'Playground',
  iconPrefix: 'twitter'
}

export const Variant = () => ({
  components: { MButtons },
  template: `
  <div>
    <m-buttons variant="default">Heading 1</m-buttons>
    <m-buttons variant="primary">Heading 1</m-buttons>
    <m-buttons variant="info">Heading 1</m-buttons>
    <m-buttons variant="success">Heading 1</m-buttons>
    <m-buttons variant="danger">Heading 1</m-buttons>
    <m-buttons variant="warning">Heading 1</m-buttons>
  </div>
  `
})
