// import { storiesOf } from '@storybook/vue'
// import { withInfo } from 'storybook-addon-vue-info'
// import VText from '.'

// const wrapper = {
//   components: { VText }
// }

// storiesOf('Atom - VText', module)
//   .addDecorator(withInfo)
//   .add('size', () => ({
//     ...wrapper,
//     template: `
//       <div>
//         <VText size="x-large">Sample text x-large</VText>
//         <VText size="large">Sample text large</VText>
//         <VText size="medium">Sample text medium</VText>
//         <VText size="small">Sample text small</VText>
//         <VText size="x-small">Sample text x-small</VText>
//       </div>
//     `
//   }), { info: true })
//   .add('weight', () => ({
//     ...wrapper,
//     template: '<VText weight="bold">Sample bold text</VText>'
//   }), { info: true })
//   .add('tag', () => ({
//     ...wrapper,
//     template: `<VText tag="span">Sample text with '&#x3C;span&#x3E;' tag</VText>`
//   }), { info: true })

import AText from './index.vue'

export default {
  title: 'Atom/Text',
  components: AText,
  argTypes: {
  },
  excludeStories: /.*Data$/
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  component: { AText },
  template: '<AText v-bind="$props">{{text}}</AText>'
})

export const p = Template.bind({})
p.args = {
  tag: 'p',
  text: 'Haloo1'
}

export const span = Template.bind({})
span.args = {
  tag: 'span',
  text: 'Haloo2'
}

// export const BySize = () => ({
//   component: { AText },
//   template: `
//   <div>
//   <AText size="x-large">Size</AText>
//   <AText size="large">Size</AText>
//   <AText size="medium">Size</AText>
//   <AText size="small">Size</AText>
//   <AText size="x-small">Size</AText>
//   </div>`
// })

// export const ByTag = () => ({
//   component: { AText },
//   template: `
//   <div>
//   <AText tag="x-large">Size</AText>
//   <AText tag="large">Size</AText>
//   <AText tag="medium">Size</AText>
//   </div>`
// })
