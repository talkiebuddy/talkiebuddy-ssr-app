import ALabel from './index.vue'
import { storyFactory } from '~/.storybook/util/helpers'

export default storyFactory({
  title: 'Atom/Label',
  component: ALabel,
  description: 'The completed documentation will sooner release. This docs is about Label Atom',
  argTypes: {

  },
  excludeStories: /.*Data$/
})

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ALabel },
  template: `<a-label v-bind="$props">{{label}}</a-label>
  `,
  data () {
    return {
      label: ''
    }
  }
})

export const Playground = Template.bind({})
Playground.args = {
  label: 'Label'
}

export const Default = () => ({
  components: { ALabel },
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
  data () {
    return {
      option: null
    }
  }
})

export const htmlFor = () => ({
  components: { ALabel },
  template: `
    <div>
      <a-heading :level="5">Default Label</a-heading>
      <br/>
      <ALabel htmlFor="text-input">Label Full Name</ALabel>
      <input type="text" id="text-input">
    </div>
  `
})
