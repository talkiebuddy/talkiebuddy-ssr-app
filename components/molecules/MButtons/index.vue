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
    :title="title"
    @click="onClick"
  >
    <slot v-if="iconPrefix" name="icon">
      <div class="m-buttons__icon">
        <a-icon :name="iconPrefix" :fill="iconColor" />
      </div>
    </slot>
    <div class="m-buttons__label">
      <a-text :color="labelColor">
        {{ label }}
        <slot />
      </a-text>
    </div>
    <slot v-if="iconSuffix" name="icon">
      <div class="m-buttons__icon">
        <a-icon :name="iconSuffix" :fill="iconColor" />
      </div>
    </slot>
  </component>
</template>

<script>
export default {
  name: 'MButtons',
  props: {
    id: {
      type: String,
      default: undefined
    },
    type: {
      type: String,
      required: true,
      default: 'buttons'
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
    variant: {
      type: String,
      default: 'default'
    },
    target: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    iconSuffix: {
      type: String,
      default: ''
    },
    iconPrefix: {
      type: String,
      default: ''
    },
    iconColor: {
      type: String,
      default: 'inherit'
    },
    label: {
      type: String,
      default: undefined
    },
    labelColor: {
      type: String,
      default: 'inherit'
    },
    size: {
      type: String,
      validator (value) {
        return ['x-small', 'small', 'medium', 'large'].includes(value)
      },
      default: 'x-small'
    },
    square: Boolean,
    stretch: Boolean,
    isOutlined: Boolean,
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
    computedTarget () {
      return this.target || (this.href ? '_blank' : null)
    },
    classes () {
      return {
        'm-buttons': true,
        'm-buttons--only-icon': !this.label && (this.iconPrefix || this.iconSuffix),
        'm-buttons--stretch': this.stretch,
        'm-buttons--square': this.square,
        'm-buttons--outline': this.isOutlined,
        [`m-buttons--variant-${this.variant}`]: !!this.variant,
        [`m-buttons--size-${this.size}`]: !!this.size
        // 'm-buttons': true,
        // 'm-buttons--disabled': this.disabled,
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
