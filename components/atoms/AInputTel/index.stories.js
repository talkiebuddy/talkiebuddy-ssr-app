import AInputTel from '.'
import { storyFactory } from '~/plugins/util/helpers'

export default storyFactory({
  title: 'Design System/Atom/Input Tel',
  component: AInputTel,
  description:
    'The completed documentation will sooner release. This docs is about Input Tel Atom',
  argTypes: {},
})

const wrapper = {
  components: {
    AInputTel,
  },
}

const Template = (args, { argTypes }) => ({
  ...wrapper,
  props: Object.keys(argTypes),
  template: `
  <div>
  <a-input-tel v-model="phoneNumber" v-bind="$props" />

  <br/><br/>

  Value :
  <pre>{{ phoneNumber }}</pre>
  </div>
  `,
  data() {
    return {
      phoneNumber: {
        number: '+447792916879',
      },
    }
  },
})

export const Playground = Template.bind({})
Playground.args = {}

export const single = () => ({
  ...wrapper,
  template: `
      <div>
        <a-input-tel v-model="phoneNumber" placeholder="Enter your phone number"/>

        <br/><br/>

        Value :
        <pre>{{ phoneNumber }}</pre>

      </div>
    `,
  data() {
    return {
      phoneNumber: {
        number: '+447792916879',
      },
    }
  },
})
