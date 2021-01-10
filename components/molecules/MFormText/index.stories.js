import MFormText from './index.vue'
import { storyFactory } from '~/.storybook/util/helpers.js'

export default storyFactory({
  title: 'Molecule/Form Text',
  component: MFormText,
  description: 'The completed documentation will sooner release. This docs is about Form Text Molecule',
  argTypes: {

  },
  excludeStories: /.*Data$/
})

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  component: { MFormText },
  template: `<m-form-text v-bind="$props"></m-form-text>
  `
})

export const Playground = Template.bind({})
Playground.args = {
  label: 'Full Name',
  placeholder: 'Please fill in your full name',
  type: 'text'
}

export const defaults = () => ({
  component: { MFormText },
  template: `
  <div>
  <m-form-text label="Full Name" type="text" placeholder="Please fill in your full name" v-model="fieldValue"></m-form-text>
  <br/><br/>

  <pre>Field value is: {{ fieldValue }}</pre>
  </div>
  `,
  data () {
    return {
      fieldValue: ''
    }
  }
})

export const invalid = () => ({
  component: { MFormText },
  template: `
  <m-form-text label="Full Name" type="text" value="4123213" error errorMessages="Name can not include numbers"></m-form-text>
  `
})
