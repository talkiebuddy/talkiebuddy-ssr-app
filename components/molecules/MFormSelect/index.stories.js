import MFormSelect from '.'
import { storyFactory } from '~/.storybook/util/helpers.js'

export default storyFactory({
  title: 'Design System/Molecule/Form Select',
  component: MFormSelect,
  description: 'The completed documentation will sooner release. This docs is about Form Select Molecule',
  argTypes: {

  },
  excludeStories: /.*Data$/
})

const wrapper = {
  components: { MFormSelect }
}

const Template = (args, { argTypes }) => ({
  ...wrapper,
  props: Object.keys(argTypes),
  template: '<m-form-select v-bind="$props"></m-form-select>'
})

const options = [
  {
    label: 'Option A',
    value: 'a'
  },
  {
    label: 'Option B',
    value: 'b'
  },
  {
    label: 'Option C',
    value: 'c'
  },
  {
    label: 'Option D',
    value: 'd',
    disabled: true
  }
]

export const Playground = Template.bind({})
Playground.args = {
  label: 'Choose your food',
  emptyValueLabel: 'Please select a food',
  options
}

export const Default = () => ({
  ...wrapper,
  template: `
      <div>
        <m-form-select
          label="Choose your food"
          emptyValueLabel="Please select a food"
          v-model="frieldValue"
          :options="options"
        />

        <br/><br/>

        Field value is: {{ frieldValue }}
      </div>
    `,
  data () {
    return {
      frieldValue: 'c',
      options
    }
  }
})

export const Invalid = () => ({
  ...wrapper,
  template: `
      <div>
        <m-form-select
          label="Choose your food"
          emptyValueLabel="Please select a food"
          v-model="frieldValue"
          :options="options"
          error
          errorMessages="Please choose one of the options"
        />
      </div>
    `,
  data () {
    return {
      frieldValue: '',
      options
    }
  }
})

export const Required = () => ({
  ...wrapper,
  template: `
      <div>
        <m-form-select
          label="Choose your food"
          emptyValueLabel="Please select a food"
          v-model="frieldValue"
          :options="options"
          required
        />
      </div>
    `,
  data () {
    return {
      frieldValue: '',
      options
    }
  }
})

export const Disabled = () => ({
  ...wrapper,
  template: `
      <div>
        <m-form-select
          label="Choose your food"
          emptyValueLabel="Please select a food"
          v-model="frieldValue"
          :options="options"
          disabled
        />
      </div>
    `,
  data () {
    return {
      frieldValue: '',
      options
    }
  }
})
