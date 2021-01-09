<template>
  <header
    :class="{
      'o-header': 1,
      'o-header--is-open': menuIsOpen,
    }"
  >
    <div class="o-header__bar">
      <router-link to="/" class="o-header__logo">
        <a-logo />
      </router-link>
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
const defaultNav = [
  {
    label: 'NavItem',
    to: ''
  },
  {
    label: 'NavItem',
    to: ''
  }
]

export default {
  name: 'OHeader',
  props: {
    navList: {
      type: Array,
      required: true,
      default: defaultNav
    }
  },
  data () {
    return {
      menuIsOpen: false
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
