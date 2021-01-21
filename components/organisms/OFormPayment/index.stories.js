import OFormPayment from './index.vue'
import { storyFactory } from '~/.storybook/util/helpers.js'

export default storyFactory({
  title: 'Design System/Organism/Form Payment',
  component: OFormPayment,
  description: 'The completed documentation will sooner release. This docs is about Form Text Molecule',
  argTypes: {

  },
  excludeStories: /.*Data$/
})

const wrapper = {
  components: {
    OFormPayment
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { OFormPayment },
  template: `
  <div>
  <o-form-payment
    v-model="fieldValue"
    :label="label"
  />

  <br/><br/>

  Field value :
  <pre>{{ fieldValue }}</pre>

  </div>
  `,
  data () {
    return {
      fieldValue: {
        creditCard: {
          number: ''
        },
        cardHolder: '',
        securityCode: '',
        expiry: ''
      }
    }
  }
})

export const Playground = Template.bind({})
Playground.args = {
  label: {
    securityCode: 'Security Code',
    creditCardNumber: 'Credit Card Number',
    expiry: 'Expiry date',
    cardHolder: 'Cardholder\'s Name'
  }
}

export const Default = () => ({
  ...wrapper,
  template: `
      <div>
        <o-form-payment
          v-model="paymentData"
          :label="label"
        />

        <br/><br/>
        <pre>Field value is: {{ paymentData }}</pre>
      </div>
    `,
  data () {
    return {
      paymentData: {
        creditCard: {
          number: ''
        },
        cardHolder: '',
        securityCode: '',
        expiry: ''
      },
      label: {
        securityCode: 'Security Code',
        creditCardNumber: 'Credit Card Number',
        expiry: 'Expiry date',
        cardHolder: 'Cardholder\'s Name'
      }
    }
  }
})
