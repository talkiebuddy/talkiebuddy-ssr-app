<template>
  <tr class="m-table-row">
    <template v-if="row">
      <a-table-cell
        v-for="(cell, $index) in row"
        :key="$index"
        :heading="heading"
      >
        {{ cell.value }}
      </a-table-cell>
    </template>
    <slot></slot>
  </tr>
</template>

<script>
export default {
  props: {
    row: {
      type: Array,
      default: () => {},
    },
    heading: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
