<template>
  <div class="m-carousel-slide">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MCarouselSlide',
}
</script>

<style lang="scss">
.m-carousel-slide {
  padding: 1rem;
  user-select: none;
}
</style>
