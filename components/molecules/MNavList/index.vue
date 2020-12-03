<template>
  <ul v-if="list.length" class="m-nav-list">
    <a-nav-item
      v-for="item in list"
      :key="item.label"
      :to="item.to"
      :href="item.href"
      @click="onClick"
    >
      {{ item.label }}
    </a-nav-item>
  </ul>
</template>

<script>
import ANavItem from '../../atoms/ANavItem'

export default {
  name: 'MNavList',
  components: {
    ANavItem
  },
  props: {
    list: Array
  },
  methods: {
    onClick () {
      this.$emit('click', this.$emit)
    }
  }
}
</script>
