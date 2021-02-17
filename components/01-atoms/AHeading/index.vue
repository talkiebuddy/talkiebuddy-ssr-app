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
      /** Heading level. Options[1, 2, 3, 4, 5 , 6]. For example '1' will result in a <h1> tag */
      type: Number,
      validation(val) {
        return [1, 2, 3, 4, 5, 6].includes(val)
      },
      default: 1,
    },
  },
  computed: {
    type() {
      return `h${this.level}`
    },
    classes() {
      return {
        'a-heading': true,
        [`a-heading--${this.level}`]: true,
      }
    },
  },
}
</script>

<style lang="scss">
.a-heading {
  &--1 {
    font-size: $font-size-4xl;
    line-height: $line-height-heading;
  }

  &--2 {
    font-size: $font-size-3xl;
    line-height: $line-height-heading;
  }

  &--3 {
    font-size: $font-size-2xl;
    line-height: $line-height-heading;
  }

  &--4 {
    font-size: $font-size-xl;
    line-height: $line-height-heading;
  }

  &--5 {
    font-size: $font-size-l;
    line-height: $line-height-heading;
  }

  &--6 {
    font-size: $font-size-m;
    line-height: $line-height-heading;
  }
}
</style>
