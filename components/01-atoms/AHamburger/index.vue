<template>
  <button :class="classes" @click="handleClick">
    <span class="a-hamburger__bar" />
  </button>
</template>

<script>
export default {
  name: 'AHamburger',
  props: {
    /** Whether the hamburger button is open */
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isSwitched: this.isOpen,
    }
  },
  computed: {
    classes() {
      return {
        'a-hamburger': 1,
        'a-hamburger--is-open': this.isSwitched,
      }
    },
  },
  watch: {
    isOpen(newVal) {
      this.isSwitched = newVal
    },
  },
  methods: {
    handleClick(event) {
      /**
       * Click event
       * @type {Event}
       */
      this.isSwitched = !this.isSwitched
      this.$emit('click', event)
    },
  },
}
</script>

<style lang="scss">
.a-hamburger {
  $this: &;

  appearance: none;
  background-color: $color-transparent;
  border: 0;
  border-radius: none;
  box-shadow: none;
  cursor: pointer;
  display: block;
  font-size: 0;
  margin: 0;
  overflow: hidden;
  padding: 0;
  position: relative;
  text-indent: -9999px;
  transition: background $duration-m;
  height: 2.2rem;
  width: 2.8rem;

  &:focus {
    outline: none;
  }

  &__bar {
    background: $color-neutralBlack;
    display: block;
    height: 0.3rem;
    left: 0;
    position: absolute;
    right: 0;
    top: (2.2rem / 2) - (0.3rem / 2);
    transition: background 0s $duration-m;

    &,
    &::after,
    &::before {
      border-radius: $border-radius-s;
    }

    &::after,
    &::before {
      content: '';
      background: $color-neutralBlack;
      display: block;
      height: 0.3rem;
      left: 0;
      position: absolute;
      width: 100%;
    }

    &::before {
      top: -0.3rem - 0.4rem;
      transition: top $duration-m $duration-m, transform $duration-m 0s,
        background $duration-m 0s;
    }

    &::after {
      bottom: -0.3rem - 0.4rem;
      transition: bottom $duration-m $duration-m, transform $duration-m 0s,
        background $duration-m 0s;
    }
  }

  &--is-open {
    #{$this}__bar {
      background: none;

      &::before,
      &::after {
        background-color: $color-neutralBlack;
      }

      &::before {
        top: 0;
        transform: rotate(45deg);
        transition: top $duration-m 0s, transform $duration-m $duration-m,
          background $duration-m 0s;
      }

      &::after {
        bottom: 0;
        transform: rotate(-45deg);
        transition: bottom $duration-m 0s, transform $duration-m $duration-m,
          background $duration-m 0s;
      }
    }
  }
}
</style>
