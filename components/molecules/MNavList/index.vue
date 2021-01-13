<template>
  <ul v-if="list.length" :class="classes">
    <a-nav-item
      v-for="item in list"
      :key="item.label"
      :to="item.to"
      :href="item.href"
      @click="handleClick"
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
    /** An array of nav item objects. List format: { label: String, to: [String, Array], href: String } */
    list: {
      type: Array,
      default: () => []
    },
    direction: {
      type: String,
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
    handleClick () {
      this.$emit('click', this.$emit)
    }
  }
}
</script>
