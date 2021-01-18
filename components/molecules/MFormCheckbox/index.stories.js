import MFormCheckbox from '.'
import { storyFactory } from '~/.storybook/util/helpers.js'

export default storyFactory({
  title: 'Design System/Molecule/Form Checkbox',
  component: MFormCheckbox,
  description: 'The completed documentation will sooner release. This docs is about Form Checkbox Molecule',
  argTypes: {

  },
  excludeStories: /.*Data$/
})

const wrapper = {
  components: { MFormCheckbox }
}

const Template = (args, { argTypes }) => ({
  ...wrapper,
  props: Object.keys(argTypes),
  template: '<m-form-checkbox v-bind="$props"></m-form-checkbox>'
})

const option = [
  {
    label: 'Option A',
    value: 'optiona'
  },
  {
    label: 'Option B',
    value: 'optionb'
  },
  {
    label: 'Option C',
    value: 'optionc'
  },
  {
    label: 'Option D',
    value: 'optiond',
    disabled: true
  }
]

export const Playground = Template.bind({})
Playground.args = {
  label: 'Choose your food',
  required: true,
  options: option
}

export const Single = () => ({
  ...wrapper,
  template: `
      <div>
        <m-form-checkbox
          label="Do you accept our terms & conditions?"
          v-model="selection"
          required
          checked
        />

        <br/><br/>

        Field value is: {{ selection }}
      </div>
    `,
  data () {
    return {
      selection: ''
    }
  }
})

export const SingleDisabled = () => ({
  ...wrapper,
  template: `
      <div>
        <m-form-checkbox
          label="Do you accept our terms & conditions?"
          v-model="selection"
          disabled
        />

      </div>
    `,
  data () {
    return {
      selected: ''
    }
  }
})

export const Multiple = () => ({
  ...wrapper,
  template: `
      <div>
        <m-form-checkbox
          label="Choose some of your favourite cities"
          :options="options"
          v-model="fieldValue"
          required
        />

        <br/><br/>

        Field value is: {{ fieldValue }}
      </div>
    `,
  data () {
    return {
      fieldValue: ['nyc', 'amsterdam'],
      options: [
        {
          label: 'New York City',
          value: 'nyc'
        },
        {
          label: 'Paris - Disabled',
          value: 'paris',
          disabled: true
        },
        {
          label: 'London',
          value: 'london'
        },
        {
          label: 'Amsterdam',
          value: 'amsterdam'
        }
      ]
    }
  }
})

export const Disabled = () => ({
  ...wrapper,
  template: `
      <div>
        <m-form-checkbox
          label="Choose some of your favourite cities"
          :options="options"
          v-model="fieldValue"
          disabled
        />
      </div>
    `,
  data () {
    return {
      fieldValue: '',
      options: [
        {
          label: 'New York City',
          value: 'nyc'
        },
        {
          label: 'Paris - Disabled',
          value: 'paris',
          disabled: true
        },
        {
          label: 'London',
          value: 'london'
        },
        {
          label: 'Amsterdam',
          value: 'amsterdam'
        }
      ]
    }
  }
})

export const Invalid = () => ({
  ...wrapper,
  template: `
      <div>
        <m-form-checkbox
          label="Choose some of your favourite cities"
          :options="options"
          v-model="fieldValue"
          error
          errorMessages="Please select one of the available options"
        />
      </div>
    `,
  data () {
    return {
      fieldValue: '',
      options: [
        {
          label: 'New York City',
          value: 'nyc'
        },
        {
          label: 'Paris - Disabled',
          value: 'paris',
          disabled: true
        },
        {
          label: 'London',
          value: 'london'
        },
        {
          label: 'Amsterdam',
          value: 'amsterdam'
        }
      ]
    }
  }
})
