<template>
  <div :class="classes">
    <template v-if="type === 'dot'">
      <div class="a-loader__dot a-loader__dot-1" />
      <div class="a-loader__dot a-loader__dot-2" />
      <div class="a-loader__dot a-loader__dot-3" />
    </template>
  </div>
</template>
</template>

<script>
export default {
  name: 'ALoader',
  props: {
    size: {
      type: String,
      default: 'medium',
      validator (val) {
        return ['small', 'medium', 'large'].includes(val)
      }
    },
    type: {
      type: String,
      default: ''
    }
  },
  computed: {
    classes () {
      return {
        'a-loader': true,
        [`a-loader--${this.size}`]: true
      }
    }
  }
}
</script>
