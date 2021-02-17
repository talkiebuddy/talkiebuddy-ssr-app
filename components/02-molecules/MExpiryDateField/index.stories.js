import MExpiryDateField from '../MExpiryDateField'
import { storyFactory } from '~/plugins/util/helpers.js'

export default storyFactory({
  title: 'Design System/Molecule/Expiry Date Field',
  component: MExpiryDateField,
  description:
    'The completed documentation will sooner release. This docs is about Expiry Date Field Molecule',
  argTypes: {},
  excludeStories: /.*Data$/,
})

const wrapper = {
  components: { MExpiryDateField },
}

const Template = (args, { argTypes }) => ({
  ...wrapper,
  props: Object.keys(argTypes),
  template: `
  <div>
    <m-expiry-date-field v-model="fieldValue" v-bind="$props"></m-expiry-date-field>

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
    <m-expiry-date-field label="Expiry Date" v-model="fieldValue" ></m-expiry-date-field>

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
    <m-expiry-date-field label="Expiry Date"  v-model="fieldValue" error errorMessages="Please enter a valid expiry date"></m-expiry-date-field>

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
    <m-expiry-date-field label="Expiry Date"  v-model="fieldValue" required></m-expiry-date-field>

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
    <m-expiry-date-field label="Expiry Date" disabled></m-expiry-date-field>
  </div>
  `,
  data() {
    return {}
  },
})
