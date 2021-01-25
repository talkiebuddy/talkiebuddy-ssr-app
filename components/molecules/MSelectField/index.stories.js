import MSelectField from '.'
import { storyFactory } from '~/plugins/util/helpers.js'

export default storyFactory({
  title: 'Design System/Molecule/Select Field',
  component: MSelectField,
  description:
    'The completed documentation will sooner release. This docs is about Select Field Molecule',
  argTypes: {},
  excludeStories: /.*Data$/,
})

const wrapper = {
  components: { MSelectField },
}

const Template = (args, { argTypes }) => ({
  ...wrapper,
  props: Object.keys(argTypes),
  template: `
  <div>
  <m-select-field v-model="fieldValue" v-bind="$props"></m-select-field>

  <br/><br/>

  Field value :
  <pre>{{ fieldValue }}</pre>
  </div>
  `,
  data() {
    return {
      fieldValue: '',
    }
  },
})

const options = [
  {
    label: 'Option A',
    value: 'a',
  },
  {
    label: 'Option B',
    value: 'b',
  },
  {
    label: 'Option C',
    value: 'c',
  },
  {
    label: 'Option D',
    value: 'd',
    disabled: true,
  },
]

export const Playground = Template.bind({})
Playground.args = {
  label: 'Choose your food',
  emptyValueLabel: 'Please select a food',
  options,
}

export const Default = () => ({
  ...wrapper,
  template: `
      <div>
        <m-select-field
          label="Choose your food"
          emptyValueLabel="Please select a food"
          v-model="fieldValue"
          :options="options"
        />

        <br/><br/>

        Field value :
        <pre>{{ fieldValue }}</pre>
      </div>
    `,
  data() {
    return {
      fieldValue: '',
      options,
    }
  },
})

export const Required = () => ({
  ...wrapper,
  template: `
      <div>
        <m-select-field
          label="Choose your food"
          emptyValueLabel="Please select a food"
          v-model="fieldValue"
          :options="options"
          required
        />
        <br/><br/>

        Field value :
        <pre>{{ fieldValue }}</pre>
      </div>
    `,
  data() {
    return {
      fieldValue: '',
      options,
    }
  },
})

export const Invalid = () => ({
  ...wrapper,
  template: `
      <div>
        <m-select-field
          label="Choose your food"
          emptyValueLabel="Please select a food"
          v-model="fieldValue"
          :options="options"
          error
          errorMessages="Please choose one of the options"
        />
        <br/><br/>

        Field value :
        <pre>{{ fieldValue }}</pre>
      </div>
    `,
  data() {
    return {
      fieldValue: '',
      options,
    }
  },
})

export const Disabled = () => ({
  ...wrapper,
  template: `
      <div>
        <m-select-field
          label="Choose your food"
          emptyValueLabel="Please select a food"
          :options="options"
          disabled
        />
      </div>
    `,
  data() {
    return {
      options,
    }
  },
})
