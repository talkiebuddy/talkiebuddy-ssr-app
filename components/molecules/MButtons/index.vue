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
      default: ''
    },
    /** "IconSuffix" prop for Icon after label */
    iconSuffix: {
      type: String,
      default: ''
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

<style lang="scss" scoped>
.m-buttons {
  border-radius: $border-radius-xl;
  border: 1px solid transparent;
  color: $color-neutralWhite;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  font-size: $font-size-xs;
  font-weight: $font-weight-medium;
  border-radius: 3em;
  line-height: 1;
  padding: $spacing-xs $spacing-s;
  text-align: center;
  user-select: none;
  letter-spacing: 0.25px;
  min-height: 2.5rem;
  position: relative;

  > * + * {
    margin-left: $spacing-2xs;
  }

  &:hover:not(:disabled) {
    box-shadow: $shadow-md;
  }

  &:focus {
    outline: none;
    background-color: inherit;
    box-shadow: $shadow-md;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: $opacity-half;
  }

  &--only-icon {
    width: 40px;
    min-width: 0;
    padding: 0;

    > * + * {
      margin-left: 0;
    }

    &:not(.m-buttons--square) {
      border-radius: $border-radius-round;
    }
  }

  &--square {
    border-radius: $border-radius-s;

    &.m-buttons--size-l {
      width: 60px;
    }

    &.m-buttons--size-xl {
      width: 100px;
      padding: $spacing-m;

      & .m-buttons__icon {
        margin-bottom: $spacing-s;
      }
    }
  }

  &--outline {
    border: 1px solid currentColor;
    background-color: transparent;
  }

  &--variant {
    &-default {
      color: $color-neutralGrayDarker;

      &:hover:not(:disabled) {
        color: $color-neutralWhite;
        background-color: $color-neutralGrayDarker;
        border: 1px solid transparent;
      }

      &:not(.m-buttons--outline) {
        color: $color-neutralGrayDarker;
        background-color: $color-neutralGrayLighter;

        &:hover:not(:disabled) {
          color: $color-neutralGrayDarker;
          background-color: $color-neutralGraySemi;
        }
      }
    }

    &-primary {
      color: $color-brandPrimaryDarker;

      &:hover:not(:disabled) {
        color: $color-neutralWhite;
        background-color: $color-brandPrimaryDarker;
        border: 1px solid transparent;
      }

      &:not(.m-buttons--outline) {
        color: $color-neutralWhite;
        background-color: $color-brandPrimary;

        &:hover:not(:disabled) {
          color: $color-neutralWhite;
          background-color: $color-brandPrimaryDarker;
        }
      }
    }

    &-success {
      color: $color-semanticSuccessDark;

      &:hover:not(:disabled) {
        color: $color-neutralWhite;
        background-color: $color-semanticSuccessDark;
        border: 1px solid transparent;
      }

      &:not(.m-buttons--outline) {
        color: $color-neutralWhite;
        background-color: $color-semanticSuccess;

        &:hover:not(:disabled) {
          color: $color-neutralWhite;
          background-color: $color-semanticSuccessDark;
        }
      }
    }

    &-info {
      color: $color-semanticInfo;

      &:hover:not(:disabled) {
        color: $color-neutralWhite;
        background-color: $color-semanticInfoDark;
        border: 1px solid transparent;
      }

      &:not(.m-buttons--outline) {
        color: $color-neutralWhite;
        background-color: $color-semanticInfo;

        &:hover:not(:disabled) {
          color: $color-neutralWhite;
          background-color: $color-semanticInfoDark;
        }
      }
    }

    &-danger {
      color: $color-semanticDanger;

      &:hover:not(:disabled) {
        color: $color-neutralWhite;
        background-color: $color-semanticDangerDark;
        border: 1px solid transparent;
      }

      &:not(.m-buttons--outline) {
        color: $color-neutralWhite;
        background-color: $color-semanticDanger;

        &:hover:not(:disabled) {
          color: $color-neutralWhite;
          background-color: $color-semanticDangerDark;
        }
      }
    }

    &-warning {
      color: $color-semanticWarning;

      &:hover:not(:disabled) {
        color: $color-neutralWhite;
        background-color: $color-semanticWarningDark;
        border: 1px solid transparent;
      }

      &:not(.m-buttons--outline) {
        color: $color-neutralWhite;
        background-color: $color-semanticWarning;

        &:hover:not(:disabled) {
          color: $color-neutralWhite;
          background-color: $color-semanticWarningDark;
        }
      }
    }
  }

  &--size {
    &-small {
      height: 60px;
      font-size: $font-size-m;

      &.m-buttons--only-icon {
        width: 60px;
      }
    }
    &-large {
      height: 100px;
      font-size: $font-size-s;

      &.m-buttons--only-icon {
        width: 100px;
      }
    }
  }

  &--stretch {
    width: 100%;
  }
}

</style>
