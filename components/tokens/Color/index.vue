<template>
  <div>
    <span class="t-swatch" :style="`background: ${colorHex}`" />
    <span class="t-label">
      {{ colorName }} <br>
      {{ colorHex }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'TColor',
  props: {
    colorHex: {
      type: String
    },
    colorName: {
      type: String
    }
  }
}
</script>
