<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <i :class="classes" :style="styles" v-html="svg" />
</template>

<script>
export default {
  name: 'AIcon',
  props: {
    /** Icon name. This is the svg filename located in 'assets/images/icons' without .svg extension */
    name: {
      required: true,
      type: String,
      default: 'meh',
    },
    /** Icon color */
    fill: {
      type: String,
      default: 'black',
    },
    /** Icon size. Options: ['small', 'medium', 'large'] */
    size: {
      type: String,
      validator(value) {
        return ['x-small', 'small', 'medium', 'large'].includes(value)
      },
      default: 'x-small',
    },
  },
  data() {
    return {
      svg: null,
    }
  },
  computed: {
    svgLoader() {
      return () =>
        import(
          /* webpackChunkName: "Icon" */ '../../../assets/images/icons/' +
            (this.name ? this.name : 'meh') +
            '.svg'
        )
    },
    styles() {
      return {
        color: this.fill,
      }
    },
    classes() {
      return {
        'a-icon': true,
        [`a-icon--${this.size}`]: true,
        [`a-icon--${this.name}`]: true,
      }
    },
  },
  watch: {
    name() {
      this.loadSvg()
    },
  },
  created() {
    this.loadSvg()
  },
  methods: {
    async loadSvg() {
      try {
        const component = await this.svgLoader()
        this.svg = component.default
      } catch (e) {
        throw new Error(`Could not load icon svg - ${e}`)
      }
    },
  },
}
</script>

<style lang="scss">
.a-icon {
  display: block;

  &--x-small {
    width: 1.5em;
    height: 1.5em;
  }

  &--small {
    width: 2.4em;
    height: 2.4em;
  }

  &--medium {
    width: 3.6em;
    height: 3.6em;
  }

  &--large {
    width: 4.8em;
    height: 4.8em;
  }

  svg {
    display: block;
    fill: currentColor;
    width: 100%;
    height: 100%;
  }
}
</style>
