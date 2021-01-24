import APlaceholder from './index.vue'
import { storyFactory } from '~/plugins/util/helpers'

export default storyFactory({
  title: 'Design System/Atom/Placeholder',
  component: APlaceholder,
  description:
    'The completed documentation will sooner release. This docs is about Placeholder Atom',
  argTypes: {},
  excludeStories: /.*Data$/,
})

const wrapper = {
  components: { APlaceholder },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  ...wrapper,
  template: '<a-placeholder v-bind="$props"></a-placeholder>',
})

export const Playground = Template.bind({})
Playground.args = {
  type: 'custom',
  imageGraphic: 'table',
  customWidth: 1000,
  customHeight: 550,
}

export const Text = () => ({
  ...wrapper,
  template: '<a-placeholder type="raw-text" :lines="3"></a-placeholder>',
})

export const LineVariation = () => ({
  ...wrapper,
  template: `
      <div>
        <p>Heading Placeholder</p><br>

        <a-placeholder type="raw-text" :lines="2" :lineScale="2" :lineHeight=".75"/>

        <br/><p>Paragraph Placeholder</p><br>

        <a-placeholder type="raw-text" :lines="5" />

        <br/><p>Paragraph Placeholder non-rounded corners</p><br>

        <a-placeholder type="raw-text" :lines="4" :roundedCorners="false"/>
      </div>
    `,
})

export const Colors = () => ({
  ...wrapper,
  template:
    '<a-placeholder type="raw-text" backgroundColor="#e74c3c" foregroundColor="#f1c40f"/>',
})

export const BulletList = () => ({
  ...wrapper,
  template: `
      <div>
        <a-placeholder type="bullet-list" :lines="4" />

        <br/>

        <a-placeholder type="bullet-list" :lines="2" :roundedCorners="false"/>
      </div>
    `,
})

export const Image = () => ({
  ...wrapper,
  template: `
      <div>
        <a-placeholder type="raw-image" :speed=".7" :aspectRatio="2"/>

        <br/

        <a-placeholder type="raw-image" :speed=".7" imageGraphic="yosushi-logo" />
      </div>
    `,
})

export const Mixed = () => ({
  ...wrapper,
  template: `
      <div>
        <a-placeholder type="raw-image" :speed="1.5" />

        <br/>

        <a-placeholder type="raw-text" :lines="4" />

        <br/>

        <a-placeholder type="bullet-list" :lines="4" />

        <br/>
      </div>
    `,
})
