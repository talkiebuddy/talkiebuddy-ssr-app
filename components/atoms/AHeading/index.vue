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
      type: Number,
      validation (val) {
        return [1, 2, 3, 4].includes(val)
      },
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
