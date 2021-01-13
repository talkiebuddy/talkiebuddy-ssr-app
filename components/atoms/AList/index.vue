<template>
  <component :is="tag" :class="classes">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'AList',
  props: {
    /** Whether the list is an ordred list */
    ordered: Boolean
  },
  computed: {
    classes () {
      return {
        'a-list': true,
        'a-list--ordered': this.ordered
      }
    },
    tag () {
      return this.ordered ? 'ol' : 'ul'
    }
  }
}
</script>
