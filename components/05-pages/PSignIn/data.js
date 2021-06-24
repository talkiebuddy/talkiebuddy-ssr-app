import { required, email, password } from '@/validations'
import globals from '@/data/globals'

const data = {
  title: 'Sign In',
  navList: globals.navList,
  formData: {
    email: '',
    password: '',
    language: 'en',
  },
  validations: {
    email: { email, required },
    password,
  },
  fields: [
    {
      name: 'email',
      component: 'm-text-field',
      placeholder: 'Enter your email',
      type: 'text',
      label: 'Email',
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
  ],
}

export default data
