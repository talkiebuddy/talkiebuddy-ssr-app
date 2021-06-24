import countryList from './country-list'
import securityQuestions from './security-questions'

const data = [
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

export default data
