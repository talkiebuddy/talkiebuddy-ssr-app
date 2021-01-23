import { action } from '@storybook/addon-actions'
import MButtons from './index.vue'
import { storyFactory } from '~/plugins/util/helpers.js'

export default storyFactory({
  title: 'Design System/Molecule/Buttons',
  component: MButtons,
  description:
    'The completed documentation will sooner release. This docs is about Button Atom',
  argTypes: {
    backgroundColor: {
      control: 'color',
      table: {
        category: 'Colors',
      },
    },
    iconColor: {
      control: 'color',
      table: {
        category: 'Colors',
      },
    },
    labelColor: {
      control: 'color',
      table: {
        category: 'Colors',
      },
    },
    label: { control: 'text' },
    size: {
      control: {
        type: 'select',
        options: ['x-small', 'small', 'medium', 'large'],
      },
    },
    type: {
      control: { type: 'select', options: ['a', 'button', 'router-link'] },
    },
    variant: {
      control: {
        type: 'select',
        options: ['default', 'primary', 'success', 'info', 'danger', 'warning'],
      },
    },
  },
  excludeStories: /.*Data$/,
})

const wrapper = {
  components: {
    MButtons,
  },
}

const Template = (args, { argTypes }) => ({
  ...wrapper,
  props: Object.keys(argTypes),
  template: '<m-buttons @click="action" :style="styles" v-bind="$props" />',
  computed: {
    styles() {
      return {
        backgroundColor: this.backgroundColor,
      }
    },
  },
  methods: { action: action('button clicked') },
})

export const Playground = Template.bind({})
Playground.args = {
  type: 'button',
  label: 'Playground',
  iconPrefix: 'twitter',
}

export const Variant = () => ({
  ...wrapper,
  template: `
  <div>
    <m-buttons variant="default">Heading 1</m-buttons>
    <m-buttons variant="primary">Heading 1</m-buttons>
    <m-buttons variant="info">Heading 1</m-buttons>
    <m-buttons variant="success">Heading 1</m-buttons>
    <m-buttons variant="danger">Heading 1</m-buttons>
    <m-buttons variant="warning">Heading 1</m-buttons>
  </div>
  `,
})
