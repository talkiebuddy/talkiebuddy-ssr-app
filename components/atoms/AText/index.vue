<template>
  <component :is="`${tag}`" class="a-text" :style="classes">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'AText',
  props: {
    tag: {
      type: String,
      default: 'span'
    },
    color: {
      type: String,
      default: 'white'
    }
  },
  computed: {
    classes () {
      return {
        color: this.color
      }
    }
  }
}
</script>
