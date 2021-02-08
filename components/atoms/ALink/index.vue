<template>
  <a :href="link.url" @click="handleClick">{{ link.name }}</a>
</template>

<script>
export default {
  name: 'ALink',
  props: {
    link: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    },
  },
}
</script>
