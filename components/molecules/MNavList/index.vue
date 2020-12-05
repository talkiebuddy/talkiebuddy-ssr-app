<template>
  <ul v-if="list.length" :class="classes">
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
    list: Array,
    direction: {
      type: String,
      required: true,
      default: 'horizontal'
    }
  },
  computed: {
    classes () {
      return {
        'm-nav-list': true,
        [`m-nav-list--${this.direction}`]: true
      }
    }
  },
  methods: {
    onClick () {
      this.$emit('click', this.$emit)
    }
  }
}
</script>
