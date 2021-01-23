<template>
  <header :class="classes">
    <div class="o-header__bar">
      <nuxt-link to="/" class="o-header__logo">
        <a-logo />
      </nuxt-link>
      <div class="o-header__nav">
        <m-nav-list :list="navList" />
      </div>

      <div class="o-header__hamburger">
        <a-hamburger :is-open="menuIsOpen" @click="toggleMenu" />
      </div>

      <div class="o-header__menu">
        <m-nav-list :list="navList" direction="vertical" @click="toggleMenu" />
      </div>

      <div class="o-header__overlay" @click="toggleMenu" />
    </div>
  </header>
</template>

<script>
// const defaultNav = [
//   {
//     label: 'NavItem',
//     to: ''
//   },
//   {
//     label: 'NavItem',
//     to: ''
//   }
// ]

export default {
  name: 'OHeader',
  props: {
    /** An array of nav item objects. List format: { label: String, to: [String, Array], href: String } */
    navList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      menuIsOpen: false,
    }
  },
  computed: {
    classes() {
      return {
        'o-header': true,
        'o-header--is-open': this.menuIsOpen,
      }
    },
  },
  // computed: {
  //   mobile(){
  //     return {
  //       ''
  //     }
  //   }
  // }
  methods: {
    toggleMenu() {
      this.menuIsOpen = !this.menuIsOpen
    },
  },
}
</script>

<style lang="scss">
.o-header {
  $this: &;
  $animation-speed: 0.4s;
  $animation-easing: cubic-bezier(0.37, 0.96, 0.22, 1.01);

  &__bar {
    position: relative;
    background-color: $color-transparent;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
  }

  &__logo {
    width: 8rem;
  }

  &__hamburger {
    position: relative;
    z-index: 6;
  }

  &__menu {
    align-items: flex-start;
    background: $color-neutralWhite;
    display: flex;
    flex-direction: column;
    left: 100%;
    min-height: 100vh;
    position: absolute;
    padding-top: 5rem;
    top: 0;
    transition: transform $animation-speed, opacity $animation-speed,
      visibility $animation-speed;
    transition-timing-function: $animation-easing;
    visibility: hidden;
    width: 30rem;
    z-index: 5;
  }

  &__overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba($color-neutralBlack, 0.7);
    z-index: 1;
    opacity: 0;
    visibility: hidden;
    transition: opacity $animation-speed, visibility $animation-speed;
    transition-timing-function: $animation-easing;
  }

  &--is-open {
    #{$this}__menu {
      transform: translate3d(-100%, 0, 0);
      visibility: visible;
    }

    #{$this}__overlay {
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>
