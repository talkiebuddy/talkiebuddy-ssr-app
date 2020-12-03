import { action } from '@storybook/addon-actions'
import AButton from './index.vue'
import { storyFactory } from '~/.storybook/util/helpers.js'

export default storyFactory({
  title: 'Atom/Button',
  component: AButton,
  description: 'The completed documentation will sooner release. This docs is about Button Atom',
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    type: { control: { type: 'select', options: ['a', 'button', 'router-link'] } },
    label: { control: 'text' },
    primary: {
      table: {
        disable: true
      }
    },
    secondary: {
      table: {
        disable: true
      }
    },
    success: {
      table: {
        disable: true
      }
    },
    warning: {
      table: {
        disable: true
      }
    },
    error: {
      table: {
        disable: true
      }
    },
    disabled: {
      table: {
        disable: true
      }
    }
  },
  excludeStories: /.*Data$/
})

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AButton },
  template: '<a-button @onClick="action" v-bind="$props"/>',
  methods: { action: action('clicked') }
})

export const Sandbox = Template.bind({})
Sandbox.args = {
  label: 'Sandbox',
  type: 'button'
}

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Primary Button',
  type: 'button'
}

export const Secondary = Template.bind({})
Secondary.args = {
  secondary: true,
  label: 'Secondary Button',
  type: 'button'
}

export const Success = Template.bind({})
Success.args = {
  success: true,
  label: 'Success Button',
  type: 'button'
}

export const Error = Template.bind({})
Error.args = {
  error: true,
  label: 'Error Button',
  type: 'button'
}

export const Warning = Template.bind({})
Warning.args = {
  warning: true,
  label: 'Warning Button',
  type: 'button'
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  label: 'Disabled Button',
  type: 'button'
}
