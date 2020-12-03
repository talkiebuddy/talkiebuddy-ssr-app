<template>
  <component
    :is="tag"
    :id="id"
    :type="type"
    :to="to"
    :href="href"
    :class="classes"
    :target="computedTarget"
    :disabled="disabled"
    :style="style"
    @click="onClick"
  >
    <span class="a-button__label">
      <slot>
        {{ label }}
      </slot>
    </span>
  </component>
</template>

<script>
export default {
  name: 'AButton',
  props: {
    size: {
      type: String,
      default: 'medium',
      validator (value) {
        return ['small', 'medium', 'large'].includes(value)
      }
    },
    to: {
      type: [Object, String]
    },
    backgroundColor: String,
    color: String,
    label: String,
    id: String,
    type: String,
    href: String,
    target: String,
    primary: Boolean,
    secondary: Boolean,
    success: Boolean,
    warning: Boolean,
    error: Boolean,
    disabled: Boolean
  },
  computed: {
    computedTarget () {
      return this.target || (this.href ? '_blank' : null)
    },
    classes () {
      return {
        'a-button': true,
        'a-button--primary': this.primary,
        'a-button--secondary': this.secondary,
        'a-button--disabled': this.disabled,
        'a-button--success': this.success,
        'a-button--error': this.error,
        'a-button--warning': this.warning,
        [`a-button--${this.size}`]: true
      }
    },
    tag () {
      if (this.href) { return 'a' }
      if (this.to) { return 'router-link' }
      return 'button'
    },
    style () {
      return {
        backgroundColor: this.backgroundColor,
        color: this.color
      }
    }
  },
  methods: {
    onClick (event) {
      this.$emit('onClick', event)
    }
  }
}
</script>
