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
      <a-text :color="labelColor">
        {{ label }}
        <slot />
      </a-text>
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
    /** ID attribute */
    id: {
      type: String,
      default: ''
    },
    /** Type attribute for button - ie type="submit" */
    type: {
      type: String,
      default: 'button'
    },
    /** "to" prop for vue-router - renders a <router-link> */
    to: {
      type: [Object, String],
      default: ''
    },
    /** "href" for link - renders an <a> component */
    href: {
      type: String,
      default: ''
    },
    /** Variant button mode ex. Success, Warning, Error, Info */
    variant: {
      type: String,
      default: 'default'
    },
    /** target attrbitue for the <a> tag */
    target: {
      type: String,
      default: ''
    },
    /** "IconPrefix" prop for Icon before label */
    iconPrefix: {
      type: String,
      default: null
    },
    /** "IconSuffix" prop for Icon after label */
    iconSuffix: {
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
    disabled: {
      type: Boolean,
      default: false
    },
    square: {
      type: Boolean,
      default: false
    },
    stretch: {
      type: Boolean,
      default: false
    },
    isOutlined: {
      type: Boolean,
      default: false
    },
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
