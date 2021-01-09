<template>
  <button :class="classes" @click="$emit('click')">
    <span class="a-hamburger__bar" />
  </button>
</template>

<script>
export default {
  name: 'AHamburger',
  props: {
    /** Whether the hamburger button is open */
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return {
        'a-hamburger': 1,
        'a-hamburger--is-open': this.isOpen
      }
    }
  }
}
</script>
