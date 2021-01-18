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
          v-model="fieldValue"
          :options="options"
        />

        <br/><br/>

        Field value is: {{ fieldValue }}
      </div>
    `,
  data () {
    return {
      fieldValue: 'c',
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
          v-model="fieldValue"
          :options="options"
          error
          errorMessages="Please choose one of the options"
        />
      </div>
    `,
  data () {
    return {
      fieldValue: '',
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
          v-model="fieldValue"
          :options="options"
          required
        />
      </div>
    `,
  data () {
    return {
      fieldValue: '',
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
          v-model="fieldValue"
          :options="options"
          disabled
        />
      </div>
    `,
  data () {
    return {
      fieldValue: '',
      options
    }
  }
})
