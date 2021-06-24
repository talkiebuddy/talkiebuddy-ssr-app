import AInputCheckbox from '../AInputCheckbox'
import { storyFactory } from '~/plugins/util/helpers'

export default storyFactory({
  title: 'Atomic Design/Atom/Input Checkbox',
  component: AInputCheckbox,
  description:
    'The completed documentation will sooner release. This docs is about Input Checkbox Atom',
  argTypes: {},
})

const wrapper = {
  components: {
    AInputCheckbox,
  },
}

const Template = (args, { argTypes }) => ({
  ...wrapper,
  props: Object.keys(argTypes),
  template: `
  <div>
  <a-input-checkbox v-model="selectedValue" v-bind="$props"></a-input-checkbox>

  <br/><br/>

  Value :
  <pre>{{ selectedValue }}</pre>

  </div>
  `,
  data() {
    return {
      selectedValue: '',
    }
  },
})

export const Playground = Template.bind({})
Playground.args = {
  checked: true,
  value: true,
  label: 'Do you accept the terms and conditions?',
}

export const Default = () => ({
  ...wrapper,
  template: `
      <div>
        <label>
          <a-input-checkbox v-model="selectedValue" checked/>
          Do you accept the terms and conditions?
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

export const MultipleChoice = () => ({
  ...wrapper,
  template: `
      <div>
        <label>
          <a-input-checkbox v-model="selectedValue" value="option1"/>
          Options 1
        </label>

        <label>
          <a-input-checkbox v-model="selectedValue" value="option2"/>
          Options 2
        </label>

        <label>
          <a-input-checkbox v-model="selectedValue" value="option3"/>
          Options 3
        </label>

        <br/><br/>

        Value :
        <pre>{{ selectedValue }}</pre>
      </div>
    `,
  data() {
    return {
      selectedValue: ['option1', 'option3'],
    }
  },
})
