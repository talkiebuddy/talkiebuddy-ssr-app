import { action } from '@storybook/addon-actions'
import {
  required,
  email,
  password,
  name,
  creditCard,
  expiry,
} from '@/validations'
import countryList from './country-list'
import securityQuestions from './security-questions'
import OGenericForm from '.'
import { storyFactory } from '~/.storybook/util/helpers.js'

export default storyFactory({
  title: 'Design System/Organism/Generic Form',
  component: OGenericForm,
  description:
    'The completed documentation will sooner release. This docs is about Form Select Molecule',
  argTypes: {},
  excludeStories: /.*Data$/,
})
const wrapper = {
  components: { OGenericForm },
}

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
  fields: [
    {
      name: 'firstName',
      component: 'm-form-text',
      type: 'text',
      label: 'First Name',
    },
    {
      name: 'lastName',
      component: 'm-form-text',
      type: 'text',
      label: 'Last Name',
    },
    {
      name: 'email',
      component: 'm-form-text',
      type: 'text',
      label: 'Email',
    },
    {
      name: 'phoneNumber',
      component: 'm-form-tel',
      label: 'Phone Number',
      placeholder: 'Enter a phone number',
      autocomplete: false,
      errorMessage: 'Please enter a valid phone number',
    },
    {
      name: 'password',
      component: 'm-form-text',
      type: 'password',
      label: 'Password',
      autocomplete: 'off',
      visibleValidation: true,
    },
    {
      name: 'countryOfResidence',
      component: 'm-form-select',
      label: 'Choose your country',
      options: countryList,
    },
    {
      name: 'securityQuestion',
      component: 'm-form-select',
      label: 'Security Question',
      options: securityQuestions,
    },
    {
      name: 'securityAnswer',
      component: 'm-form-text',
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
      component: 'o-form-payment',
      label: {
        creditCardNumber: 'Credit Card Number',
        expiry: 'Expiry date',
        cardHolder: "Cardholder's Name",
        securityCode: 'Security',
      },
    },
  ],
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
      fields: [
        {
          name: 'firstName',
          component: 'm-form-text',
          type: 'text',
          label: 'First Name',
        },
        {
          name: 'lastName',
          component: 'm-form-text',
          type: 'text',
          label: 'Last Name',
        },
        {
          name: 'email',
          component: 'm-form-text',
          type: 'text',
          label: 'Email',
        },
        {
          name: 'phoneNumber',
          component: 'm-form-tel',
          label: 'Phone Number',
          placeholder: 'Enter a phone number',
          autocomplete: false,
          errorMessage: 'Please enter a valid phone number',
        },
        {
          name: 'password',
          component: 'm-form-text',
          type: 'password',
          label: 'Password',
          autocomplete: 'off',
          visibleValidation: true,
        },
        {
          name: 'countryOfResidence',
          component: 'm-form-select',
          label: 'Choose your country',
          options: countryList,
        },
        {
          name: 'securityQuestion',
          component: 'm-form-select',
          label: 'Security Question',
          options: securityQuestions,
        },
        {
          name: 'securityAnswer',
          component: 'm-form-text',
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
          component: 'o-form-payment',
          label: {
            creditCardNumber: 'Credit Card Number',
            expiry: 'Expiry date',
            cardHolder: "Cardholder's Name",
            securityCode: 'Security',
          },
        },
      ],
    }
  },
})
