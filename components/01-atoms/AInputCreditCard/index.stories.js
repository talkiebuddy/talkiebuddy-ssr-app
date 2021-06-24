import AInputCreditCard from '../AInputCreditCard'
import { storyFactory } from '~/plugins/util/helpers'

export default storyFactory({
  title: 'Atomic Design/Atom/Input Credit Card',
  component: AInputCreditCard,
  description:
    'The completed documentation will sooner release. This docs is about Input Credit Card Atom',
  argTypes: {},
})

const wrapper = {
  components: {
    AInputCreditCard,
  },
}

const Template = (args, { argTypes }) => ({
  ...wrapper,
  props: Object.keys(argTypes),
  template: `
      <div>
        <a-input-credit-card v-model="creditCard" v-bind="$props"/>

        <br/><br/>Value :
        <pre>{{ creditCard }}</pre>
      </div>
    `,
  data() {
    return {
      creditCard: {
        number: '4111111111111111',
        type: '',
      },
    }
  },
})

export const Playground = Template.bind({})
Playground.args = {}

export const Default = () => ({
  ...wrapper,
  template: `
      <div>
        <a-input-credit-card v-model="creditCard"/>

        <br/><br/>Value :
        <pre>{{ creditCard }}</pre>
      </div>
    `,
  data() {
    return {
      creditCard: {
        number: '4111111111111111',
        type: '',
      },
    }
  },
})
