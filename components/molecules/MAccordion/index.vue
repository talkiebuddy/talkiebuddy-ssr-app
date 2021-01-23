<template>
  <div class="m-accordion">
    <m-accordion-item v-for="item in items" :key="item.title">
      <template v-slot:title>{{ item.title }}</template>
      <template v-slot:content>
        <div v-html="item.content"></div>
      </template>
    </m-accordion-item>
  </div>
</template>

<script>
export default {
  name: 'MAccordion',
  props: {
    /** An array of accordion items. Array item format is { title: String, content: String } */
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
}
</script>

<style lang="scss">
.m-accordion {
  .m-accordion-item:not(:last-child) {
    .m-accordion-item__content {
      border-bottom: 0;
    }
  }
}
</style>
