<template>
  <component :is="`${tag}`" class="a-text">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'AText',
  props: {
    tag: {
      type: String,
      default: 'p'
    }
  }
}
</script>
