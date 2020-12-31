<template>
  <m-button>
    <div
      :class="{
        'v-a-hamburger': 1,
        'v-a-hamburger--is-open': isOpen
      }"
      @click="$emit('click')"
    >
      <span class="v-a-hamburger__bar" />
    </div>
  </m-button>
</template>

<script>
export default {
  name: 'MButtonIcon',
  props: {
    /** Whether the hamburger button is open */
    isOpen: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.v-a-hamburger {
  $this: &;

  appearance: none;
  background-color: transparent;
  border: 0;
  border-radius: none;
  box-shadow: none;
  cursor: pointer;
  display: block;
  font-size: 0;
  height: 2.2rem;
  margin: 0;
  overflow: hidden;
  padding: 0;
  position: relative;
  text-indent: -9999px;
  transition: background .3s;
  width: 2.8rem;

  &:focus {
    outline: none;
  }

  &__bar {
    background: #000;
    display: block;
    height: .3rem;
    left: 0;
    position: absolute;
    right: 0;
    top: (2.2rem / 2) - (.3rem / 2);
    transition: background 0s .3s;

    &,
    &::after,
    &::before {
      border-radius: 2px;
    }

    &::after,
    &::before {
      background: #000;
      content: '';
      display: block;
      height: .3rem;
      left: 0;
      position: absolute;
      width: 100%;
    }

    &::before {
      top: -.3rem - .4rem;
      transition: top .3s .3s, transform .3s 0s, background .3s 0s;
    }

    &::after {
      bottom: -.3rem - .4rem;
      transition: bottom .3s .3s, transform .3s 0s, background .3s 0s;
    }
  }

  &--is-open {

    #{$this}__bar {
      background: none;

      &::before,
      &::after {
        background-color: #000;
      }

      &::before {
        top: 0;
        transform: rotate(45deg);
        transition: top .3s 0s, transform .3s .3s, background .3s 0s;
      }

      &::after {
        bottom: 0;
        transform: rotate(-45deg);
        transition: bottom .3s 0s, transform .3s .3s, background .3s 0s;
      }
    }
  }
}
</style>
