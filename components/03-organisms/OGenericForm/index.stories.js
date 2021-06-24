import { action } from '@storybook/addon-actions'
import {
  required,
  email,
  password,
  name,
  creditCard,
  expiry,
} from '@/validations'
import OGenericForm from '../OGenericForm'
import countryList from './country-list'
import securityQuestions from './security-questions'
import { storyFactory } from '~/plugins/util/helpers.js'

export default storyFactory({
  title: 'Atomic Design/Organism/Generic Form',
  component: OGenericForm,
  description:
    'The completed documentation will sooner release. This docs is about Generic Form Organism',
  argTypes: {},
  excludeStories: /.*Data$/,
})

const wrapper = {
  components: { OGenericForm },
}

const fields = [
  {
    name: 'firstName',
    component: 'm-text-field',
    placeholder: 'Enter your first name',
    type: 'text',
    label: 'First Name',
  },
  {
    name: 'lastName',
    component: 'm-text-field',
    placeholder: 'Enter your last name',
    type: 'text',
    label: 'Last Name',
  },
  {
    name: 'email',
    component: 'm-text-field',
    placeholder: 'Enter your email',
    type: 'text',
    label: 'Email',
  },
  {
    name: 'phoneNumber',
    component: 'm-tel-field',
    label: 'Phone Number',
    placeholder: 'Enter your phone number',
    autocomplete: false,
    errorMessage: 'Please enter a valid phone number',
  },
  {
    name: 'password',
    component: 'm-text-field',
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    autocomplete: 'off',
    visibleValidation: true,
  },
  {
    name: 'address',
    component: 'm-textarea-field',
    placeholder: 'Enter your address',
    label: 'Address',
  },
  {
    name: 'countryOfResidence',
    component: 'm-select-field',
    label: 'Choose your country',
    emptyValueLabel: 'Select your country',
    options: countryList,
  },
  {
    name: 'securityQuestion',
    component: 'm-select-field',
    label: 'Security Question',
    emptyValueLabel: 'Select your question',
    options: securityQuestions,
  },
  {
    name: 'securityAnswer',
    component: 'm-text-field',
    type: 'text',
    label: 'Security Answer',
    conditionalRendering: {
      field: 'securityQuestion',
      operator: '!=',
      value: '',
    },
  },
  {
    name: 'payment',
    component: 'o-payment-form',
    label: {
      creditCardNumber: 'Credit Card Number',
      expiry: 'Expiry Date',
      cardHolder: "Cardholder's Name",
      securityCode: 'Security',
    },
  },
]

const Template = (args, { argTypes }) => ({
  ...wrapper,
  props: Object.keys(argTypes),
  template: `
  <div>
  <o-generic-form v-model="formData" v-bind="$props"></o-generic-form>

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
  formData: {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    countryOfResidence: '',
    address: '',
    phoneNumber: {
      number: '',
    },
    language: 'en',
    securityQuestion: '',
    securityAnswer: '',
    payment: {
      cardHolder: '',
      creditCardNumber: '',
      securityCode: '',
      expiry: '',
    },
  },
  validations: {
    firstName: name,
    lastName: name,
    email: { email, required },
    address: { required },
    creditCardNumber: { required },
    cardHolder: { required },
    countryOfResidence: { required },
    securityQuestion: { required },
    securityAnswer: { required },
    password,
    payment: {
      creditCard,
      cardHolder: { required },
      securityCode: { required },
      expiry,
    },
  },
  fields,
}

export const Default = () => ({
  ...wrapper,
  template: `
      <div>
        <o-generic-form
          :fields="fields"
          :validations="validations"
          @submit="handleSubmit"
          v-model="formData"
        />

        <br/>
        <pre>{{ formData }}</pre>
      </div>
    `,
  methods: {
    handleSubmit: action('handleSubmit'),
    processForm(data) {
      if (data) {
        const dataObject = {
          ...data,
          phoneNumber: data.phoneNumber.number,
          phoneNumberCountryCode: data.phoneNumber.country.dialCode,
        }

        const formData = new FormData()
        for (const key in dataObject) {
          formData.append(key, dataObject[key])
        }
      }
    },
  },
  data() {
    return {
      formData: {
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        countryOfResidence: '',
        address: '',
        phoneNumber: {
          number: '',
        },
        language: 'en',
        securityQuestion: '',
        securityAnswer: '',
        payment: {
          cardHolder: '',
          creditCardNumber: '',
          securityCode: '',
          expiry: '',
        },
      },
      validations: {
        firstName: name,
        lastName: name,
        email: { email, required },
        address: { required },
        creditCardNumber: { required },
        cardHolder: { required },
        countryOfResidence: { required },
        securityQuestion: { required },
        securityAnswer: { required },
        password,
        payment: {
          creditCard,
          cardHolder: { required },
          securityCode: { required },
          expiry,
        },
      },
      fields,
    }
  },
})
