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
    <slot name="label">
      <div class="m-button__label">
        <a-text :color="labelColor">
          {{ label }}
        </a-text>
      </div>
    </slot>

    <slot v-if="icon" name="icon">
      <div class="m-button__icon">
        <a-icon :name="icon" :color="iconColor" :size="size" />
      </div>
    </slot>
  </component>
</template>

<script>
export default {
  name: 'MButton',
  props: {
    id: {
      type: String,
      default: undefined
    },
    icon: {
      type: String,
      required: false,
      default: undefined
    },
    label: {
      type: String,
      required: false,
      default: 'label'
    },
    type: {
      type: String,
      required: true,
      default: 'button'
    },
    size: {
      type: String,
      default: 'medium',
      validator (value) {
        return ['small', 'medium', 'large'].includes(value)
      }
    },
    labelColor: {
      type: String,
      required: true,
      default: 'white'
    },
    iconColor: {
      type: String,
      required: false,
      default: 'white'
    },
    to: {
      type: [Object, String],
      default: undefined
    },
    // backgroundColor: String,
    // color: String,
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
        'm-button': true,
        'm-button--primary': this.primary,
        'm-button--secondary': this.secondary,
        'm-button--disabled': this.disabled,
        'm-button--success': this.success,
        'm-button--error': this.error,
        'm-button--warning': this.warning,
        [`m-button--${this.size}`]: true
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
