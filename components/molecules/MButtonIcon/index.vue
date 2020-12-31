<template>
  <component
    :is="tag"
    :id="id"
    :type="type"
    :to="to"
    :href="href"
    :class="classes"
    :target="computedTarget"
    :style="style"
    :aria-label="ariaLabel"
    :title="title"
    @click="onClick"
  />
</template>

<script>
export default {
  name: 'MButtonIcon',
  props: {
    id: {
      type: String,
      default: undefined
    },
    type: {
      type: String,
      required: true,
      default: 'button'
    },
    to: {
      type: [Object, String],
      default: undefined
    },
    href: {
      type: String,
      required: false,
      default: undefined
    },
    target: String
  },
  computed: {
    computedTarget () {
      return this.target || (this.href ? '_blank' : null)
    },
    classes () {
      return {
        'm-button-icon': true
      }
    },
    tag () {
      if (this.href) {
        return 'a'
      }
      if (this.to) {
        return 'router-link'
      }
      return 'button'
    }
  },
  methods: {
    onClick (event) {
      this.$emit('onClick', event)
    }
  }
}
</script>
