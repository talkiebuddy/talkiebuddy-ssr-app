<template>
  <i
    :class="[
      'a-icon',
      `a-icon--${size}`,
      `a-icon--${name}`
    ]"
    :style="styles"
    v-html="svg"
  ></i>
</template>

<script>
export default {
  name: "AIcon",
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
      default: "black"
    },
    /** Icon size. Options: ['small', 'medium', 'large'] */
    size: {
      type: String,
      validator(value) {
        return ["x-small", "small", "medium", "large"].indexOf(value) !== -1;
      },
      default: "x-small"
    }
  },
  data() {
    return {
      svg: null
    };
  },
  created() {
    this.loadSvg();
  },
  computed: {
    svgLoader() {
      return () =>
        import(
          /* webpackChunkName: "Icon" */ `!html-loader!@/assets/images/icons/${this.name ? this.name : 'meh'}.svg`
        );
    },
    styles () {
      return {
        color: this.fill
      }
    }
  },
  watch: {
    name() {
      this.loadSvg();
    }
  },
  methods: {
    async loadSvg() {
      try {
        let component = await this.svgLoader();
        this.svg = component.default;
      } catch (e) {
        throw new Error(`Could not load icon svg - ${e}`);
      }
    }
  }
};
</script>
