<template>
  <header
    :class="classes"
  >
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
      default: () => []
    }
  },
  data () {
    return {
      menuIsOpen: false
    }
  },
  computed: {
    classes () {
      return {
        'o-header': true,
        'o-header--is-open': this.menuIsOpen
      }
    }
  },
  // computed: {
  //   mobile(){
  //     return {
  //       ''
  //     }
  //   }
  // }
  methods: {
    toggleMenu () {
      this.menuIsOpen = !this.menuIsOpen
    }
  }
}
</script>
