<template>
  <li class="a-nav-item" @click="onClick">
    <a v-if="href" :href="href" target="_blank">
      <slot />
    </a>
    <router-link v-else :to="to">
      <slot />
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'ANavItem',
  props: {
    to: {
      type: [String, Object]
    },
    href: String
  },
  methods: {
    onClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>
