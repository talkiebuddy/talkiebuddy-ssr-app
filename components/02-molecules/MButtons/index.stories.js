import { action } from '@storybook/addon-actions'
// import { withDesign } from 'storybook-addon-designs'
import MButtons from '../MButtons'
import { storyFactory } from '~/plugins/util/helpers.js'

export default storyFactory({
  title: 'Atomic Design/Molecule/Buttons',
  component: MButtons,
  description:
    'The completed documentation will sooner release. This docs is about Button Atom',
  // decorators: [withDesign],
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
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FqTRpqzQ3yMDIVfbVof7TkZ%2FTalkieBuddy-Documentation%3Fnode-id%3D329%253A8755',
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
