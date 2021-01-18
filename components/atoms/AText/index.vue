<template>
  <component :is="`${tag}`" class="a-text" :style="styles">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'AText',
  props: {
    /** The html tag to be used for text wrapper */
    tag: {
      type: String,
      default: 'p'
    },
    color: {
      type: String,
      default: ''
    },
    weight: {
      type: String,
      default: 'inherit'
    },
    size: {
      type: String,
      default: 'inherit'
    }
  },
  computed: {
    styles () {
      return {
        color: this.color
      }
    }
  }
}
</script>
