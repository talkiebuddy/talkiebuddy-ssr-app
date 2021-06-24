import MRadioField from '../MRadioField'
import { storyFactory } from '~/plugins/util/helpers.js'

export default storyFactory({
  title: 'Atomic Design/Molecule/Radio Field',
  component: MRadioField,
  description:
    'The completed documentation will sooner release. This docs is about Radio Field Molecule',
  argTypes: {},
  excludeStories: /.*Data$/,
})

const wrapper = {
  components: { MRadioField },
}

const Template = (args, { argTypes }) => ({
  ...wrapper,
  props: Object.keys(argTypes),
  template: `
  <div>
    <m-radio-field v-model="fieldValue" v-bind="$props"></m-radio-field>

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

const option = [
  {
    label: 'New York City',
    value: 'new-york',
  },
  {
    label: 'Paris - Disabled',
    value: 'paris',
    disabled: true,
  },
  {
    label: 'London',
    value: 'london',
    checked: true,
  },
  {
    label: 'Amsterdam',
    value: 'amsterdam',
  },
]

export const Playground = Template.bind({})
Playground.args = {
  label: "What's your favourite city",
  required: true,
  options: option,
}

export const Default = () => ({
  ...wrapper,
  template: `
      <div>
        <m-radio-field
          label="What's you favourite city ?"
          v-model="fieldValue"
          :options="option"
        />

        <br/><br/>

        Field Value :
        <pre>{{ fieldValue }}</pre>
      </div>
    `,
  data() {
    return {
      fieldValue: '',
      option,
    }
  },
})

export const Invalid = () => ({
  ...wrapper,
  template: `
      <div>
        <m-radio-field
          label="What's you favourite city ?"
          v-model="fieldValue"
          :options="option"
          error
          errorMessages="Please select one of the available options"
        />

        <br/><br/>

        Field Value :
        <pre>{{ fieldValue }}</pre>
      </div>
    `,
  data() {
    return {
      fieldValue: '',
      option,
    }
  },
})

export const Required = () => ({
  ...wrapper,
  template: `
      <div>
        <m-radio-field
          label="What's you favourite city ?"
          v-model="fieldValue"
          required
          :options="option"
        />

        <br/><br/>

        Field Value :
        <pre>{{ fieldValue }}</pre>
      </div>
    `,
  data() {
    return {
      fieldValue: '',
      option,
    }
  },
})

export const Disabled = () => ({
  ...wrapper,
  template: `
      <div>
        <m-radio-field
          label="What's you favourite city ?"
          :options="option"
          disabled
        />
      </div>
    `,
  data() {
    return {
      option,
    }
  },
})
