import TColor from './index.vue'
import { storyFactory } from '~/.storybook/util/helpers'

export default storyFactory({
  title: 'Token/Color',
  component: TColor,
  description: 'Tokenn',
  argTypes: {
    colors: { control: { type: 'object' } }
  }
})

const theme = [
  {
    colorName: '$color-brandPrimary',
    colorHex: '#5c67c6'
  },
  {
    colorName: '$color-brandPrimaryDarker',
    colorHex: '#4248a1'
  },
  {
    colorName: '$color-brandSecondary',
    colorHex: '#BC016F'
  },
  {
    colorName: '$color-brandSecondaryDarker',
    colorHex: '#42a16b'
  }
]

const neutral = [
  {
    colorName: '$color-gray1',
    colorHex: '#ffffff'
  },
  {
    colorName: '$color-gray2',
    colorHex: '#fafafa'
  },
  {
    colorName: '$color-gray3',
    colorHex: '#f5f5f5'
  },
  {
    colorName: '$color-gray4',
    colorHex: '#e8e8e8'
  },
  {
    colorName: '$color-gray5',
    colorHex: '#d9d9d9'
  },
  {
    colorName: '$color-gray6',
    colorHex: '#a5a5a5'
  },

  {
    colorName: '$color-gray7',
    colorHex: '#474747'
  },
  {
    colorName: '$color-gray8',
    colorHex: '#1e2225'
  }
]

const semantic = [
  {
    colorName: '$color-semanticInfo',
    colorHex: '#3bb7ed'
  },
  {
    colorName: '$color-semanticInfoSoft',
    colorHex: '#e2f6ff'
  },
  {
    colorName: '$color-semanticInfoDark',
    colorHex: '#005d85'
  },
  {
    colorName: '$color-semanticWarning',
    colorHex: '#ffb84b'
  },
  {
    colorName: '$color-semanticWarningSoft',
    colorHex: '#fff3e1'
  },
  {
    colorName: '$color-semanticWarningDark',
    colorHex: '#c17500'
  },

  {
    colorName: '$color-semanticDanger',
    colorHex: '#f14130'
  },
  {
    colorName: '$color-semanticDangerSoft',
    colorHex: '#ffe0dd'
  },
  {
    colorName: '$color-semanticDangerDark',
    colorHex: '#870c00'
  },
  {
    colorName: '$color-semanticSuccess',
    colorHex: '#5ecd64'
  },
  {
    colorName: '$color-semanticSuccessDar',
    colorHex: '#006505'
  },
  {
    colorName: '$color-semanticSuccessSoft',
    colorHex: '#f0fff1'
  }
]

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TColor },
  template: '<div><p>{{title}}</p><ul class="t-colors"><li v-for="color in colors"><t-color :colorHex="color.colorHex" :colorName="color.colorName"/></li></ul></div>'
})

export const ThemeColor = Template.bind({})
ThemeColor.args = {
  title: 'Title Color',
  colors: theme
}

export const NeutralColor = Template.bind({})
NeutralColor.args = {
  title: 'Neutral Color',
  colors: neutral
}

export const SemanticColor = Template.bind({})
SemanticColor.args = {
  title: 'Semantic Color',
  colors: semantic
}
