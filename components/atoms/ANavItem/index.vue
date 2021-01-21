<template>
  <li class="a-nav-item" @click="handleClick">
    <a v-if="href" :href="href" target="_blank">
      <slot />
    </a>
    <nuxt-link v-else :to="to">
      <slot />
    </nuxt-link>
  </li>
</template>

<script>
export default {
  name: 'ANavItem',
  props: {
    /** to attribute for <router-link> */
    to: {
      type: [String, Object],
      default: null
    },
    href: {
      type: String,
      default: null
    }
  },
  methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style lang="scss">
.a-nav-item {
  list-style: none;
  display: block;

  a {
    color: $color-neutralBlack;
    background: $color-transparent;
    // background: $color-neutralGrayLighter;
    transition: background 0.3s;
    display: block;
    padding: 1rem;

    &:hover {
      border-bottom: 1px solid $color-brandPrimary;
      background: rgba($color-brandPrimaryLighter, $opacity-half);
      color: rgba($color-neutralBlack, $opacity-half);
    }

    &:active {
      border-bottom: 1px solid $color-brandPrimaryDarker
    }
  }
}
</style>
