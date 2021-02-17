import MCreditCardField from '../MCreditCardField'
import { storyFactory } from '~/plugins/util/helpers.js'

export default storyFactory({
  title: 'Design System/Molecule/Credit Card Field',
  component: MCreditCardField,
  description:
    'The completed documentation will sooner release. This docs is about Credit Card Number Field Molecule',
  argTypes: {},
  excludeStories: /.*Data$/,
})

const wrapper = {
  components: { MCreditCardField },
}

const Template = (args, { argTypes }) => ({
  ...wrapper,
  props: Object.keys(argTypes),
  template: `
  <div>
    <m-credit-card-field
      v-model="fieldValue"
      v-bind="$props"
    />

    <br/><br/>

    Field value :
    <pre>{{ fieldValue }}</pre>
  </div>
  `,
  data() {
    return {
      fieldValue: {},
    }
  },
})

export const Playground = Template.bind({})
Playground.args = {
  label: 'Credit Card Number',
}

export const Default = () => ({
  ...wrapper,
  template: `
      <div>
        <m-credit-card-field
          label="Choose card number"
          v-model="creditCard"
        />

        <br/><br/>

        Field value :
        <pre>{{ creditCard }}</pre>
      </div>
    `,
  data() {
    return {
      creditCard: {
        number: '5253111111111111',
      },
    }
  },
})

export const Required = () => ({
  ...wrapper,
  template: `
      <div>
        <m-credit-card-field
          label="Credit card number"
          v-model="creditCard"
          required
        />

        <br/><br/>

        Field value :
        <pre>{{ creditCard }}</pre>
      </div>
    `,
  data() {
    return {
      creditCard: {
        number: '',
      },
    }
  },
})

export const Invalid = () => ({
  ...wrapper,
  template: `
      <div>
        <m-credit-card-field
          label="Credit card number"
          v-model="creditCard"
          error
          errorMessages="Please enter a valid credit card number"
        />

        <br/><br/>

        Field value :
        <pre>{{ creditCard }}</pre>
      </div>
    `,
  data() {
    return {
      creditCard: {
        number: '332312321312312',
      },
    }
  },
})

export const Disabled = () => ({
  ...wrapper,
  template: `
      <div>
        <m-credit-card-field
          label="Credit card number"
          v-model="creditCard"
          disabled
        />
      </div>
    `,
  data() {
    return {
      creditCard: {
        number: '',
      },
    }
  },
})
