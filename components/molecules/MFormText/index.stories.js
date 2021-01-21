import MFormText from './index.vue'
import { storyFactory } from '~/.storybook/util/helpers.js'

export default storyFactory({
  title: 'Design System/Molecule/Form Text',
  component: MFormText,
  description: 'The completed documentation will sooner release. This docs is about Form Text Molecule',
  argTypes: {

  },
  excludeStories: /.*Data$/
})

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MFormText },
  template: `
  <div>
  <m-form-text v-model="fieldValue" v-bind="$props"></m-form-text>

  <br/><br/>

  Field value :
  <pre>{{ fieldValue }}</pre>

  </div>
  `,
  data () {
    return {
      fieldValue: ''
    }
  }
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

  Field value :
  <pre>{{ fieldValue }}</pre>
  </div>
  `,
  data () {
    return {
      fieldValue: ''
    }
  }
})

export const Required = () => ({
  component: { MFormText },
  template: `
  <div>
  <m-form-text label="Full Name" type="text" placeholder="Please fill in your full name" v-model="fieldValue" required></m-form-text>

  <br/><br/>

  Field value :
  <pre>{{ fieldValue }}</pre>
  </div>
  `,
  data () {
    return {
      fieldValue: ''
    }
  }
})

export const Invalid = () => ({
  component: { MFormText },
  template: `
  <div>
  <m-form-text label="Full Name" type="text" placeholder="Please fill in your full name" v-model="fieldValue" error errorMessages="Name can not include numbers"></m-form-text>

  <br/><br/>

  Field value :
  <pre>{{ fieldValue }}</pre>
  </div>
  `,
  data () {
    return {
      fieldValue: '4123213'
    }
  }
})

export const Disabled = () => ({
  component: { MFormText },
  template: `
  <div>
  <m-form-text label="Full Name" type="text" placeholder="Please fill in your full name" v-model="fieldValue" disabled></m-form-text>

  <br/><br/>

  Field value :
  <pre>{{ fieldValue }}</pre>
  </div>
  `,
  data () {
    return {
      fieldValue: ''
    }
  }
})
