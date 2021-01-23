import MFormExpiryDate from '.'
import { storyFactory } from '~/.storybook/util/helpers.js'

export default storyFactory({
  title: 'Design System/Molecule/Form Expiry Date',
  component: MFormExpiryDate,
  description:
    'The completed documentation will sooner release. This docs is about Form Expiry Date Molecule',
  argTypes: {},
  excludeStories: /.*Data$/,
})

const wrapper = {
  components: { MFormExpiryDate },
}

const Template = (args, { argTypes }) => ({
  ...wrapper,
  props: Object.keys(argTypes),
  template: `
  <div>
    <m-form-expiry-date v-model="fieldValue" v-bind="$props"></m-form-expiry-date>

    <br/>

    Field Value :
    <pre>{{ fieldValue }}</pre>
  </div>
  `,
  data() {
    return {
      fieldValue: '2222',
    }
  },
})

export const Playground = Template.bind({})
Playground.args = {
  label: 'Expiry Date',
  required: true,
}

export const Default = () => ({
  ...wrapper,
  template: `
  <div>
    <m-form-expiry-date label="Expiry Date" v-model="fieldValue" ></m-form-expiry-date>

    <br/>

    Field Value :
    <pre>{{ fieldValue }}</pre>
  </div>
  `,
  data() {
    return {
      fieldValue: '2222',
    }
  },
})

export const Invalid = () => ({
  ...wrapper,
  template: `
  <div>
    <m-form-expiry-date label="Expiry Date"  v-model="fieldValue" error errorMessages="Please enter a valid expiry date"></m-form-expiry-date>

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

export const Required = () => ({
  ...wrapper,
  template: `
  <div>
    <m-form-expiry-date label="Expiry Date"  v-model="fieldValue" required></m-form-expiry-date>

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

export const Disabled = () => ({
  ...wrapper,
  template: `
  <div>
    <m-form-expiry-date label="Expiry Date"  v-model="fieldValue" disabled></m-form-expiry-date>

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
