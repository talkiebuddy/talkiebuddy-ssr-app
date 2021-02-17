import MTextField from '../MTextField'
import { storyFactory } from '~/plugins/util/helpers.js'

export default storyFactory({
  title: 'Design System/Molecule/Text Field',
  component: MTextField,
  description:
    'The completed documentation will sooner release. This docs is about Text Field Molecule',
  argTypes: {},
  excludeStories: /.*Data$/,
})

const wrapper = {
  components: {
    MTextField,
  },
}

const Template = (args, { argTypes }) => ({
  ...wrapper,
  props: Object.keys(argTypes),
  template: `
  <div>
  <m-text-field v-model="fieldValue" v-bind="$props"></m-text-field>

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

export const Playground = Template.bind({})
Playground.args = {
  label: 'Full Name',
  placeholder: 'Please fill in your full name',
  type: 'text',
}

export const defaults = () => ({
  ...wrapper,
  template: `
  <div>
  <m-text-field label="Full Name" type="text" placeholder="Please fill in your full name" v-model="fieldValue"></m-text-field>

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

export const Required = () => ({
  ...wrapper,
  template: `
  <div>
  <m-text-field label="Full Name" type="text" placeholder="Please fill in your full name" v-model="fieldValue" required></m-text-field>

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

export const Invalid = () => ({
  ...wrapper,
  template: `
  <div>
  <m-text-field label="Full Name" type="text" placeholder="Please fill in your full name" v-model="fieldValue" error errorMessages="Name can not include numbers"></m-text-field>

  <br/><br/>

  Field value :
  <pre>{{ fieldValue }}</pre>
  </div>
  `,
  data() {
    return {
      fieldValue: '4123213',
    }
  },
})

export const Disabled = () => ({
  ...wrapper,
  template: `
  <div>
  <m-text-field label="Full Name" type="text" placeholder="Please fill in your full name" disabled></m-text-field>
  </div>
  `,
  data() {
    return {}
  },
})
