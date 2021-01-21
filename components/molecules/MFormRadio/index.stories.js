import MFormRadio from '.'
import { storyFactory } from '~/.storybook/util/helpers.js'

export default storyFactory({
  title: 'Design System/Molecule/Form Radio',
  component: MFormRadio,
  description: 'The completed documentation will sooner release. This docs is about Form Radio Molecule',
  argTypes: {

  },
  excludeStories: /.*Data$/
})

const wrapper = {
  components: { MFormRadio }
}

const Template = (args, { argTypes }) => ({
  ...wrapper,
  props: Object.keys(argTypes),
  template: `
  <div>
    <m-form-radio v-model="fieldValue" v-bind="$props"></m-form-radio>

    <br/>

    Field Value :
    <pre>{{ fieldValue }}</pre>
  </div>
  `,
  data () {
    return {
      fieldValue: {}
    }
  }
})

const option = [
  {
    label: 'New York City',
    value: 'new-york'
  },
  {
    label: 'Paris - Disabled',
    value: 'paris',
    disabled: true
  },
  {
    label: 'London',
    value: 'london',
    checked: true
  },
  {
    label: 'Amsterdam',
    value: 'amsterdam'
  }
]

export const Playground = Template.bind({})
Playground.args = {
  label: 'What\'s your favourite city',
  required: true,
  options: option
}

export const Default = () => ({
  ...wrapper,
  template: `
      <div>
        <m-form-radio
          label="What's you favourite city ?"
          v-model="fieldValue"
          :options="option"
        />

        <br/><br/>

        Field Value :
        <pre>{{ fieldValue }}</pre>
      </div>
    `,
  data () {
    return {
      fieldValue: '',
      option
    }
  }
})

export const Invalid = () => ({
  ...wrapper,
  template: `
      <div>
        <m-form-radio
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
  data () {
    return {
      fieldValue: '',
      option
    }
  }
})

export const Required = () => ({
  ...wrapper,
  template: `
      <div>
        <m-form-radio
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
  data () {
    return {
      fieldValue: '',
      option
    }
  }
})

export const Disabled = () => ({
  ...wrapper,
  template: `
      <div>
        <m-form-radio
          label="What's you favourite city ?"
          v-model="fieldValue"
          :options="option"
          disabled
        />

        <br/><br/>

        Field Value :
        <pre>{{ fieldValue }}</pre>
      </div>
    `,
  data () {
    return {
      selected: '',
      option
    }
  }
})
