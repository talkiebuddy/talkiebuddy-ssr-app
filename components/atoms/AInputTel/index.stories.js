import AInputTel from '.'
import { storyFactory } from '~/.storybook/util/helpers'

export default storyFactory({
  title: 'Design System/Atom/Input Tel',
  component: AInputTel,
  description: 'The completed documentation will sooner release. This docs is about Input Tel Atom',
  argTypes: {

  }
})

const wrapper = {
  components: {
    AInputTel
  }
}

const Template = (args, { argTypes }) => ({
  ...wrapper,
  props: Object.keys(argTypes),
  template: '<a-input-tel v-bind="$props"></a-input-tel>'
})

export const Playground = Template.bind({})
Playground.args = {
  placeholder: 'Enter your phone number'
}

export const single = () => ({
  ...wrapper,
  template: `
      <div>
        <a-input-tel v-model="phoneNumber" placeholder="hahahah"/>

        <pre>{{ phoneNumber }}</pre>

      </div>
    `,
  data () {
    return {
      phoneNumber: {
        number: '+447792916879'
      }
    }
  }
})
