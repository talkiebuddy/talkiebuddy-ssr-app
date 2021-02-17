import AText from '../AText'
import { storyFactory } from '~/plugins/util/helpers'

export default storyFactory({
  title: 'Design System/Atom/Text',
  component: AText,
  description:
    'The completed documentation will sooner release. This docs is about Text Atom',
  argTypes: {},
  excludeStories: /.*Data$/,
})

const wrapper = {
  components: { AText },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AText },
  template: '<a-text v-bind="$props">{{text}}</a-text>',
})

export const defaults = Template.bind({})
defaults.args = {
  tag: 'p',
  text: 'This default using p tag',
}

export const BySize = () => ({
  ...wrapper,
  template: `
  <div>
    <a-text size="x-large">Size</a-text>
    <a-text size="large">Size</a-text>
    <a-text size="medium">Size</a-text>
    <a-text size="small">Size</a-text>
    <a-text size="x-small">Size</a-text>
  </div>`,
})

export const ByWeight = () => ({
  ...wrapper,
  template: `
  <div>
    <a-text weight="bold">Sample bold text</a-text>
  </div>`,
})

export const ByTag = () => ({
  ...wrapper,
  template: `
  <div>
    <a-text tag="span">Sample text with '&#x3C;span&#x3E;' tag</a-text>
  </div>`,
})
