import MFormCheckbox from '.'
import { storyFactory } from '~/.storybook/util/helpers.js'

export default storyFactory({
  title: 'Design System/Molecule/Form Checkbox',
  component: MFormCheckbox,
  description:
    'The completed documentation will sooner release. This docs is about Form Checkbox Molecule',
  argTypes: {},
  excludeStories: /.*Data$/,
})

const wrapper = {
  components: { MFormCheckbox },
}

const Template = (args, { argTypes }) => ({
  ...wrapper,
  props: Object.keys(argTypes),
  template: `
  <div>
    <m-form-checkbox v-model="fieldValue" v-bind="$props"></m-form-checkbox>

    <br/>

    Field Value :
    <pre>{{ fieldValue }}</pre>
  </div>
  `,
  data() {
    return {
      fieldValue: {},
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
        <m-form-checkbox
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
        <m-form-checkbox
          label="Do you accept our terms & conditions?"
          v-model="fieldValue"
          disabled
        />

      </div>
    `,
  data() {
    return {
      selected: '',
    }
  },
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
        <m-form-checkbox
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
        <m-form-checkbox
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
        <m-form-checkbox
          label="Choose some of your favourite cities"
          :options="options"
          v-model="fieldValue"
          disabled
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
