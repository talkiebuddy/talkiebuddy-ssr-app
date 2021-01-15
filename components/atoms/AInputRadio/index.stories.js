import AInputRadio from './index.vue'
import { storyFactory } from '~/.storybook/util/helpers'

export default storyFactory({
  title: 'Design System/Atom/Input Radio',
  component: AInputRadio,
  description: 'The completed documentation will sooner release. This docs is about Input Radio Atom',
  argTypes: {

  }
})

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AInputRadio },
  template: '<a-input-radio v-bind="$props"></a-input-radio>'
})

export const Playground = Template.bind({})
Playground.args = {
}

export const Default = () => ({
  components: { AInputRadio },
  template: `
  <div>
        <label>
          <a-input-radio v-model="selectedValue" value="option1" checked/>
          Options 1
        </label>

        <label>
          <a-input-radio v-model="selectedValue" value="option2" />
          Option 2
        </label>

        <label>
          <a-input-radio v-model="selectedValue" value="option3" />
          Option 3
        </label>

        <br/><br/>

        Value is : "{{ selectedValue }}"
      </div>
    `,
  data () {
    return {
      selectedValue: null
    }
  }
})
