<template>
  <component :is="type" :class="classes">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'AHeading',
  props: {
    level: {
      /** Heading level. Options[1, 2, 3, 4]. For example '1' will result in a <h1> tag */
      type: Number,
      validation (val) {
        return [1, 2, 3, 4, 5, 6].includes(val)
      },
      default: 1,
      required: true
    }
  },
  computed: {
    type () {
      return `h${this.level}`
    },
    classes () {
      return {
        'a-heading': true,
        [`a-heading--${this.level}`]: true
      }
    }
  }
}
</script>
