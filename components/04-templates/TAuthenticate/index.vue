<template>
  <section class="t-landing">
    <o-header :nav-list="navList"></o-header>
    <div class="container">
      <a-heading :level="3">Generic Form</a-heading>
      <div class="" style="display: flex; justify-content: space-between">
        <o-generic-form
          v-model="formData"
          :fields="fields"
          :validations="validations"
          @submit="handleSubmit"
        ></o-generic-form>
        <a-image src="logo.png" style="align-items: baseline"></a-image>
      </div>
    </div>
  </section>
</template>

<script>
import {
  required,
  email,
  password,
  name,
  creditCard,
  expiry,
} from '@/validations'
import navList from './navList.js'
import countryList from './country-list'
import securityQuestions from './security-questions'

export default {
  name: 'TAuthenticate',
  data() {
    return {
      navList,
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
      fields: [
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
      ],
    }
  },
  handleSubmit: 'handleSubmit',
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
}
</script>
