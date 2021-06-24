import OPaymentForm from '../OPaymentForm'
import { storyFactory } from '~/plugins/util/helpers.js'

export default storyFactory({
  title: 'Atomic Design/Organism/Payment Form',
  component: OPaymentForm,
  description:
    'The completed documentation will sooner release. This docs is about Payment Form Organism',
  argTypes: {},
  excludeStories: /.*Data$/,
})

const wrapper = {
  components: {
    OPaymentForm,
  },
}

const Template = (args, { argTypes }) => ({
  ...wrapper,
  props: Object.keys(argTypes),
  template: `
  <div>
  <o-payment-form
    v-model="fieldValue"
    :label="label"
  />

  <br/><br/>

  Field value :
  <pre>{{ fieldValue }}</pre>

  </div>
  `,
  data() {
    return {
      fieldValue: {
        creditCard: {
          number: '',
        },
        cardHolder: '',
        securityCode: '',
        expiry: '',
      },
    }
  },
})

export const Playground = Template.bind({})
Playground.args = {
  label: {
    securityCode: 'Security Code',
    creditCardNumber: 'Credit Card Number',
    expiry: 'Expiry date',
    cardHolder: "Cardholder's Name",
  },
}

export const Default = () => ({
  ...wrapper,
  template: `
      <div>
        <o-payment-form
          v-model="paymentData"
          :label="label"
        />

        <br/><br/>
        <pre>Field value is: {{ paymentData }}</pre>
      </div>
    `,
  data() {
    return {
      paymentData: {
        creditCard: {
          number: '',
        },
        cardHolder: '',
        securityCode: '',
        expiry: '',
      },
      label: {
        securityCode: 'Security Code',
        creditCardNumber: 'Credit Card Number',
        expiry: 'Expiry date',
        cardHolder: "Cardholder's Name",
      },
    }
  },
})
