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
