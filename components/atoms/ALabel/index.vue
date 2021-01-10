<template>
  <label :for="htmlFor" :class="classes">
    <template v-if="required">* </template>
    <slot />
  </label>
</template>

<script>
export default {
  name: 'ALabel',
  props: {
    /** "for" attribute for label */
    htmlFor: {
      type: String,
      default: null
    },
    /** If label is for a required input */
    required: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return {
        'a-label': true
      }
    }
  }
}
</script>
