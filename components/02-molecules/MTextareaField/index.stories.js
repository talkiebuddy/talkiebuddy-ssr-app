import MTextareaField from '../MTextareaField'
import { storyFactory } from '~/plugins/util/helpers.js'

export default storyFactory({
  title: 'Design System/Molecule/Textarea Field',
  component: MTextareaField,
  description:
    'The completed documentation will sooner release. This docs is about Textarea Field Molecule',
  argTypes: {},
  excludeStories: /.*Data$/,
})

const wrapper = {
  components: {
    MTextareaField,
  },
}

const Template = (args, { argTypes }) => ({
  ...wrapper,
  props: Object.keys(argTypes),
  template: `
  <div>
  <m-textarea-field v-model="fieldValue" v-bind="$props"></m-textarea-field>

  <br/><br/>

  Field value :
  <pre>{{ fieldValue }}</pre>

  </div>
  `,
  data() {
    return {
      fieldValue: '',
    }
  },
})

export const Playground = Template.bind({})
Playground.args = {
  label: 'Bio',
  placeholder: 'Enter your text',
}

export const defaults = () => ({
  ...wrapper,
  template: `
  <div>
  <m-textarea-field label="Bio" placeholder="Enter your text" v-model="fieldValue"></m-textarea-field>

  <br/><br/>

  Field value :
  <pre>{{ fieldValue }}</pre>
  </div>
  `,
  data() {
    return {
      fieldValue: '',
    }
  },
})

export const Required = () => ({
  ...wrapper,
  template: `
  <div>
  <m-textarea-field label="Bio" placeholder="Enter your text" v-model="fieldValue" required></m-textarea-field>

  <br/><br/>

  Field value :
  <pre>{{ fieldValue }}</pre>
  </div>
  `,
  data() {
    return {
      fieldValue: '',
    }
  },
})

export const Invalid = () => ({
  ...wrapper,
  template: `
  <div>
  <m-textarea-field label="Bio" placeholder="Enter your text" v-model="fieldValue" error errorMessages="Name can not include numbers"></m-textarea-field>

  <br/><br/>

  Field value :
  <pre>{{ fieldValue }}</pre>
  </div>
  `,
  data() {
    return {
      fieldValue: '4123213',
    }
  },
})

export const Disabled = () => ({
  ...wrapper,
  template: `
  <div>
  <m-textarea-field label="Bio" placeholder="Enter your text" disabled></m-textarea-field>
  </div>
  `,
  data() {
    return {}
  },
})
