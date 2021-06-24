<template>
  <hr :class="componentClassName" />
</template>

<script>
export default {
  name: 'AHr',
  props: {
    variant: {
      type: String,
      validator(value) {
        return ['thin', 'thick'].includes(value)
      },
      default: 'thick',
    },
  },
  computed: {
    componentClassName() {
      return {
        'a-hr': true,
        [`a-hr--${this.variant}`]: !!this.variant,
      }
    },
  },
}
</script>

<style lang="scss">
.a-hr {
  margin-top: 16px;
  margin-bottom: 16px;
  border: 2px solid blue;
}
</style>
