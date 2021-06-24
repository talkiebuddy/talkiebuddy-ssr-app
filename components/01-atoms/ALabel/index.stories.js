import ALabel from '../ALabel'
import { storyFactory } from '~/plugins/util/helpers'

export default storyFactory({
  title: 'Atomic Design/Atom/Label',
  component: ALabel,
  description:
    'The completed documentation will sooner release. This docs is about Label Atom',
  argTypes: {},
  excludeStories: /.*Data$/,
})

const wrapper = {
  components: {
    ALabel,
  },
}

const Template = (args, { argTypes }) => ({
  ...wrapper,
  props: Object.keys(argTypes),
  template: `<a-label v-bind="$props"></a-label>
  `,
})

export const Playground = Template.bind({})
Playground.args = {
  label: 'Label Name',
}

export const Default = () => ({
  ...wrapper,
  template: `
    <div>
        <a-heading :level="5">Default Label</a-heading>
        <br/>
        Choose One of these options:
        <br/><br/>

        <ALabel>
          <input type="radio" v-model="option" value="1" />
          Option 1
        </ALabel>

        <ALabel>
          <input type="radio" v-model="option" value="2" />
          Option 2
        </ALabel>

        <ALabel>
          <input type="radio" v-model="option" value="3" />
          Option 3
        </ALabel>
    </div>
  `,
  data() {
    return {
      option: null,
    }
  },
})

export const htmlFor = () => ({
  ...wrapper,
  template: `
    <div>
      <a-heading :level="5">Default Label</a-heading>
      <br/>
      <ALabel htmlFor="text-input">Label Full Name</ALabel>
      <input type="text" id="text-input">
    </div>
  `,
})
