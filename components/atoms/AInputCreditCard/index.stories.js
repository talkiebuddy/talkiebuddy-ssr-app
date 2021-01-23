import AInputCreditCard from '.'
import { storyFactory } from '~/plugins/util/helpers'

export default storyFactory({
  title: 'Design System/Atom/Input Credit Card',
  component: AInputCreditCard,
  description:
    'The completed documentation will sooner release. This docs is about Input Tel Atom',
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
  template: '<a-input-credit-card v-bind="$props"></a-input-credit-card>',
})

export const Playground = Template.bind({})
Playground.args = {}

export const Default = () => ({
  ...wrapper,
  template: `
      <div>
        <a-input-credit-card v-model="creditCard"/>

        <br/><br/>
        <pre> Value is: {{ creditCard }} </pre>
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

export const Disabled = () => ({
  ...wrapper,
  template: `
      <div>
        <a-input-credit-card disabled v-model="creditCard"/>
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
