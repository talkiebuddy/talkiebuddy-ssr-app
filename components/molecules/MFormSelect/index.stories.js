import MFormSelect from '.'
import { storyFactory } from '~/plugins/util/helpers.js'

export default storyFactory({
  title: 'Design System/Molecule/Select Field',
  component: MFormSelect,
  description:
    'The completed documentation will sooner release. This docs is about Form Select Molecule',
  argTypes: {},
  excludeStories: /.*Data$/,
})

const wrapper = {
  components: { MFormSelect },
}

const Template = (args, { argTypes }) => ({
  ...wrapper,
  props: Object.keys(argTypes),
  template: `
  <div>
  <m-form-select v-model="fieldValue" v-bind="$props"></m-form-select>

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

const options = [
  {
    label: 'Option A',
    value: 'a',
  },
  {
    label: 'Option B',
    value: 'b',
  },
  {
    label: 'Option C',
    value: 'c',
  },
  {
    label: 'Option D',
    value: 'd',
    disabled: true,
  },
]

export const Playground = Template.bind({})
Playground.args = {
  label: 'Choose your food',
  emptyValueLabel: 'Please select a food',
  options,
}

export const Default = () => ({
  ...wrapper,
  template: `
      <div>
        <m-form-select
          label="Choose your food"
          emptyValueLabel="Please select a food"
          v-model="fieldValue"
          :options="options"
        />

        <br/><br/>

        Field value :
        <pre>{{ fieldValue }}</pre>
      </div>
    `,
  data() {
    return {
      fieldValue: '',
      options,
    }
  },
})

export const Required = () => ({
  ...wrapper,
  template: `
      <div>
        <m-form-select
          label="Choose your food"
          emptyValueLabel="Please select a food"
          v-model="fieldValue"
          :options="options"
          required
        />
        <br/><br/>

        Field value :
        <pre>{{ fieldValue }}</pre>
      </div>
    `,
  data() {
    return {
      fieldValue: '',
      options,
    }
  },
})

export const Invalid = () => ({
  ...wrapper,
  template: `
      <div>
        <m-form-select
          label="Choose your food"
          emptyValueLabel="Please select a food"
          v-model="fieldValue"
          :options="options"
          error
          errorMessages="Please choose one of the options"
        />
        <br/><br/>

        Field value :
        <pre>{{ fieldValue }}</pre>
      </div>
    `,
  data() {
    return {
      fieldValue: '',
      options,
    }
  },
})

export const Disabled = () => ({
  ...wrapper,
  template: `
      <div>
        <m-form-select
          label="Choose your food"
          emptyValueLabel="Please select a food"
          v-model="fieldValue"
          :options="options"
          disabled
        />
        <br/><br/>

        Field value :
        <pre>{{ fieldValue }}</pre>
      </div>
    `,
  data() {
    return {
      fieldValue: '',
      options,
    }
  },
})
