<template>
  <div :class="classes">
    <template v-if="type === 'dot'">
      <div class="a-loader__dot a-loader__dot-1" />
      <div class="a-loader__dot a-loader__dot-2" />
      <div class="a-loader__dot a-loader__dot-3" />
    </template>
  </div>
</template>

<script>
export default {
  name: 'ALoader',
  props: {
    size: {
      type: String,
      default: 'medium',
      validator(val) {
        return ['small', 'medium', 'large'].includes(val)
      },
    },
    type: {
      type: String,
      default: '',
    },
  },
  computed: {
    classes() {
      return {
        'a-loader': true,
        [`a-loader--${this.size}`]: true,
      }
    },
  },
}
</script>

<style lang="scss">
.a-loader {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  &--small {
    font-size: $font-size-m;
    max-width: 3.5rem;
  }

  &--medium {
    font-size: $font-size-xl;
    max-width: 7rem;
  }

  &--large {
    font-size: $font-size-3xl;
    max-width: 10.5rem;
  }

  &__dot {
    width: 0.56em;
    height: 0.56em;
    background-color: $color-brandPrimaryDarker;
    border-radius: 100%;
    margin-right: 0.25em;
    animation: loader 1s infinite ease-in-out both;

    &:last-child {
      margin: 0;
    }

    &-1 {
      animation-delay: -0.32s;
    }

    &-2 {
      animation-delay: -0.16s;
    }
  }
}
</style>
