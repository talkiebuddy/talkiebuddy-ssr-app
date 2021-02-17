import MTelField from '../MTelField'
import { storyFactory } from '~/plugins/util/helpers.js'

export default storyFactory({
  title: 'Design System/Molecule/Tel Field',
  component: MTelField,
  description:
    'The completed documentation will sooner release. This docs is about Tel Field Molecule',
  argTypes: {},
  excludeStories: /.*Data$/,
})

const wrapper = {
  components: {
    MTelField,
  },
}

const Template = (args, { argTypes }) => ({
  ...wrapper,
  props: Object.keys(argTypes),
  template: `
  <div>
    <m-tel-field v-model="fieldValue" v-bind="$props"></m-tel-field>

    <br/><br/>

    Field value :
    <pre>{{ fieldValue }}</pre>
  </div>
  `,
  data() {
    return {
      fieldValue: {
        number: null,
      },
    }
  },
})

export const Playground = Template.bind({})
Playground.args = {
  label: 'Phone Number',
  placeholder: 'Enter your phone number',
}

export const Default = () => ({
  ...wrapper,
  template: `
  <div>
  <m-tel-field label="Phone Number" v-model="fieldValue"></m-tel-field>

  <br/><br/>

  Field value :
  <pre>{{ fieldValue }}</pre>
  </div>
  `,
  data() {
    return {
      fieldValue: {
        number: '+447792916879',
      },
    }
  },
})

export const Required = () => ({
  ...wrapper,
  template: `
  <div>
  <m-tel-field
  label="Phone Number" v-model="fieldValue" required></m-tel-field>

  <br/><br/>

  Field value :
  <pre>{{ fieldValue }}</pre>
  </div>
  `,
  data() {
    return {
      fieldValue: {
        number: null,
      },
    }
  },
})

export const Invalid = () => ({
  ...wrapper,
  template: `
  <div>
  <m-tel-field
  label="Phone Number" v-model="fieldValue"
  errorMessages="Please enter a valid phone number"></m-tel-field>

  <br/><br/>

  Field value :
  <pre>{{ fieldValue }}</pre>
  </div>
  `,
  data() {
    return {
      fieldValue: {
        number: null,
      },
    }
  },
})

export const Disabled = () => ({
  ...wrapper,
  template: `
  <div>
    <m-tel-field
    label="Phone Number" disabled></m-tel-field>
    </div>
    `,
  data() {
    return {}
  },
})
