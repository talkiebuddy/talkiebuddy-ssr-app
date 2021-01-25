import AInputRadio from '.'
import { storyFactory } from '~/plugins/util/helpers'

export default storyFactory({
  title: 'Design System/Atom/Input Radio',
  component: AInputRadio,
  description:
    'The completed documentation will sooner release. This docs is about Input Radio Atom',
  argTypes: {},
})

const wrapper = {
  components: {
    AInputRadio,
  },
}

const Template = (args, { argTypes }) => ({
  ...wrapper,
  props: Object.keys(argTypes),
  template: '<a-input-radio v-bind="$props"></a-input-radio>',
})

export const Playground = Template.bind({})
Playground.args = {}

export const Default = () => ({
  ...wrapper,
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

        Value :
        <pre>{{ selectedValue }}</pre>
      </div>
    `,
  data() {
    return {
      selectedValue: null,
    }
  },
})
