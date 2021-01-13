<template>
  <i
    :class="classes"
    :style="styles"
    v-html="svg"
  />
</template>

<script>
export default {
  name: 'AIcon',
  props: {
    /** Icon name. This is the svg filename located in 'assets/images/icons' without .svg extension */
    name: {
      required: true,
      type: String,
      default: 'meh'
    },
    /** Icon color */
    fill: {
      type: String,
      default: 'black'
    },
    /** Icon size. Options: ['small', 'medium', 'large'] */
    size: {
      type: String,
      validator (value) {
        return ['x-small', 'small', 'medium', 'large'].includes(value)
      },
      default: 'x-small'
    }
  },
  data () {
    return {
      svg: null
    }
  },
  computed: {
    svgLoader () {
      return () =>
        import(/* webpackChunkName: "Icon" */ '!html-loader!@/assets/images/icons/' + (this.name ? this.name : 'meh') + '.svg')
    },
    styles () {
      return {
        color: this.fill
      }
    },
    classes () {
      return {
        'a-icon': true,
        [`a-icon--${this.size}`]: true,
        [`a-icon--${this.name}`]: true
      }
    }
  },
  watch: {
    name () {
      this.loadSvg()
    }
  },
  created () {
    this.loadSvg()
  },
  methods: {
    async loadSvg () {
      try {
        const component = await this.svgLoader()
        this.svg = component.default
      } catch (e) {
        throw new Error(`Could not load icon svg - ${e}`)
      }
    }
  }
}
</script>
