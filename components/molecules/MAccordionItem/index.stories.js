import MAccordionItem from '.'
import { storyFactory } from '~/plugins/util/helpers'

export default storyFactory({
  title: 'Design System/Molecule/Accordion Item',
  component: MAccordionItem,
  description:
    'The completed documentation will sooner release. This docs is about Accordion Item Molecule',
  argTypes: {},
})

const wrapper = {
  components: {
    MAccordionItem,
  },
}

const Template = (args, { argTypes }) => ({
  ...wrapper,
  props: Object.keys(argTypes),
  template: '<m-accordion-item v-bind="$props"></m-accordion-item>',
})

export const Playground = Template.bind({})
Playground.args = {
  isOpen: true,
  title: 'Why do we use it?',
  content:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
}

export const Default = () => ({
  ...wrapper,
  template: `
      <m-accordion-item isOpen>
        <template slot="title">This is the expansion title</template>
        <template slot="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, eveniet!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, eveniet!</p>
        </template>
      </m-accordion-item>
    `,
})
