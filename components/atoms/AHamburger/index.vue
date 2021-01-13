<template>
  <button :class="classes" @click="handleClick">
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
  data () {
    return {
      isSwitched: this.isOpen
    }
  },
  computed: {
    classes () {
      return {
        'a-hamburger': 1,
        'a-hamburger--is-open': this.isSwitched
      }
    }
  },
  watch: {
    isOpen (newVal) {
      this.isSwitched = newVal
    }
  },
  methods: {
    handleClick (event) {
      /**
       * Click event
       * @type {Event}
       */
      this.isSwitched = !this.isSwitched
      this.$emit('click', event)
    }
  }
}
</script>
