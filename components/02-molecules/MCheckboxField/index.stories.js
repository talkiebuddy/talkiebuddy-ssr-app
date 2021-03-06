import MCheckboxField from '../MCheckboxField'
import { storyFactory } from '~/plugins/util/helpers.js'

export default storyFactory({
  title: 'Atomic Design/Molecule/Checkbox Field',
  component: MCheckboxField,
  description:
    'The completed documentation will sooner release. This docs is about Checkbox Field Molecule',
  argTypes: {},
  excludeStories: /.*Data$/,
})

const wrapper = {
  components: { MCheckboxField },
}

const Template = (args, { argTypes }) => ({
  ...wrapper,
  props: Object.keys(argTypes),
  template: `
  <div>
    <m-checkbox-field v-model="fieldValue" v-bind="$props"></m-checkbox-field>

    <br/>

    Field Value :
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
    value: 'optiona',
  },
  {
    label: 'Option B',
    value: 'optionb',
  },
  {
    label: 'Option C',
    value: 'optionc',
  },
  {
    label: 'Option D',
    value: 'optiond',
    disabled: true,
  },
]

export const Playground = Template.bind({})
Playground.args = {
  label: 'Choose your food',
  options,
}

export const Single = () => ({
  ...wrapper,
  template: `
      <div>
        <m-checkbox-field
          label="Do you accept our terms & conditions?"
          v-model="fieldValue"
          required
          checked
        />

        <br/><br/>

        Field Value :
        <pre>{{ fieldValue }}</pre>
      </div>
    `,
  data() {
    return {
      fieldValue: '',
    }
  },
})

export const SingleDisabled = () => ({
  ...wrapper,
  template: `
      <div>
        <m-checkbox-field
          label="Do you accept our terms & conditions?"
          value="accept"
          disabled
        />

      </div>
    `,
})

export const Multiple = () => ({
  ...wrapper,
  template: `
      <div>
        <m-checkbox-field
          label="Choose some of your favourite cities"
          :options="options"
          v-model="fieldValue"
          required
        />

        <br/><br/>

        Field Value :
        <pre>{{ fieldValue }}</pre>
      </div>
    `,
  data() {
    return {
      fieldValue: ['optiona', 'optionc'],
      options,
    }
  },
})

export const Required = () => ({
  ...wrapper,
  template: `
      <div>
        <m-checkbox-field
          label="Choose some of your favourite cities"
          :options="options"
          v-model="fieldValue"
          required
        />

        <br/><br/>

        Field Value :
        <pre>{{ fieldValue }}</pre>
      </div>
    `,
  data() {
    return {
      fieldValue: [],
      options,
    }
  },
})

export const Invalid = () => ({
  ...wrapper,
  template: `
      <div>
        <m-checkbox-field
          label="Choose some of your favourite cities"
          :options="options"
          v-model="fieldValue"
          error
          errorMessages="Please select one of the available options"
        />

        <br/>

        Field Value :
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
        <m-checkbox-field
          label="Choose some of your favourite cities"
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
