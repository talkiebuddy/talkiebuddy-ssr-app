<template>
  <div>
    <span class="t-typography--size">{{ typographySize }}</span>
    <span class="t-typography--label" :style="`font-size: ${typographySize}`">
      {{ typographyName }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'TTypography',
  props: {
    typographySize: {
      type: String
    },
    typographyName: {
      type: String
    }
  }
}
</script>
