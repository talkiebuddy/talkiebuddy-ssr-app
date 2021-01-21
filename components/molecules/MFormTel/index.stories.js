import MFormTel from '.'
import { storyFactory } from '~/.storybook/util/helpers.js'

export default storyFactory({
  title: 'Design System/Molecule/Form Tel',
  component: MFormTel,
  description: 'The completed documentation will sooner release. This docs is about Form Text Molecule',
  argTypes: {

  },
  excludeStories: /.*Data$/
})

const wrapper = {
  components: {
    MFormTel
  }
}

const Template = (args, { argTypes }) => ({
  ...wrapper,
  props: Object.keys(argTypes),
  template: `
  <div>
    <m-form-tel v-model="fieldValue" v-bind="$props"></m-form-tel>

    <br/><br/>

    Field value :
    <pre>{{ fieldValue }}</pre>
  </div>
  `,
  data () {
    return {
      fieldValue: {
        number: null
      }
    }
  }
})

export const Playground = Template.bind({})
Playground.args = {
  label: 'Phone Number',
  placeholder: 'Enter your phone number'
}

export const Default = () => ({
  ...wrapper,
  template: `
  <div>
  <m-form-tel label="Phone Number" v-model="fieldValue"></m-form-tel>

  <br/><br/>

  Field value :
  <pre>{{ fieldValue }}</pre>
  </div>
  `,
  data () {
    return {
      fieldValue: {
        number: '+447792916879'
      }
    }
  }
})

export const Required = () => ({
  ...wrapper,
  template: `
  <div>
  <m-form-tel
  label="Phone Number" v-model="fieldValue" required></m-form-tel>

  <br/><br/>

  Field value :
  <pre>{{ fieldValue }}</pre>
  </div>
  `,
  data () {
    return {
      fieldValue: {
        number: null
      }
    }
  }
})

export const Invalid = () => ({
  ...wrapper,
  template: `
  <div>
  <m-form-tel
  label="Phone Number" v-model="fieldValue"
  errorMessages="Please enter a valid phone number"></m-form-tel>

  <br/><br/>

  Field value :
  <pre>{{ fieldValue }}</pre>
  </div>
  `,
  data () {
    return {
      fieldValue: {
        number: null
      }
    }
  }
})

export const Disabled = () => ({
  ...wrapper,
  template: `
  <div>
    <m-form-tel
    label="Phone Number" v-model="fieldValue" disabled></m-form-tel>

    <br/><br/>

    Field value :
    <pre>{{ fieldValue }}</pre>
    </div>
    `,
  data () {
    return {
      fieldValue: {
        number: null
      }
    }
  }
})
