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
    @click="handleClick"
  >
    <slot v-if="iconPrefix" name="iconPrefix">
      <div class="m-buttons__icon">
        <a-icon :name="iconPrefix" :fill="iconColor" />
      </div>
    </slot>
    <div class="m-buttons__label">
      <!-- <a-text :color="labelColor">
        {{ label }}
      </a-text> -->
      {{ label }}
      <slot />
    </div>
    <slot v-if="iconSuffix" name="iconSuffix">
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
      default: ''
    },
    type: {
      type: String,
      default: 'button'
    },
    to: {
      type: [Object, String],
      default: ''
    },
    href: {
      type: String,
      default: ''
    },
    variant: {
      type: String,
      default: 'default'
    },
    target: {
      type: String,
      default: ''
    },
    iconSuffix: {
      type: String,
      default: null
    },
    iconPrefix: {
      type: String,
      default: null
    },
    iconColor: {
      type: String,
      default: 'inherit'
    },
    label: {
      type: String,
      default: ''
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
    disabled: Boolean,
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
    handleClick (event) {
      /**
       * Click event
       * @type {Event}
       */
      this.$emit('click', event)
    }
  }
}
</script>
