<template>
  <component :is="tag" :class="classes">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'ATableCell',
  props: {
    /** Whther this cell should be a <th> instead of <td> */
    heading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    tag () {
      return this.heading ? 'th' : 'td'
    },
    classes () {
      return {
        'a-table-cell': true,
        [`${this.heading ? 'a-table-cell--heading' : ''}`]: true
      }
    }
  }
}
</script>

<style lang="scss">
.a-table-cell {
  padding: $spacing-s;
  background: $color-neutralGrayLighter;
  border: .1rem solid $color-neutralGraySemi;
  text-align: left;

  &--heading {
    font-weight: bold;
    background: $color-neutralWhite;
  }
}
</style>
